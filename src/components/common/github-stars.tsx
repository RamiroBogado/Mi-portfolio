"use client";

import { useEffect, useState } from "react";
import { Star, GitFork } from "lucide-react";

interface RepoData {
  stargazers_count: number;
  forks_count: number;
}

// Module-level dedup: concurrent mounts for the same repo share one
// in-flight request, and resolved data is reused for up to CACHE_TTL_MS.
// This is SWR-equivalent dedup semantics without adding a dependency,
// while the /api/github-stats route handler caches upstream on the server
// (fetch with next: { revalidate: 3600 }).
const CACHE_TTL_MS = 3600 * 1000;
const dataCache = new Map<string, { data: RepoData; expires: number }>();
const inflight = new Map<string, Promise<RepoData | null>>();

function getRepoStats(repo: string): Promise<RepoData | null> {
  const cached = dataCache.get(repo);
  if (cached && cached.expires > Date.now()) {
    return Promise.resolve(cached.data);
  }

  const pending = inflight.get(repo);
  if (pending) return pending;

  const request = fetch(`/api/github-stats?repo=${encodeURIComponent(repo)}`)
    .then((res) => (res.ok ? (res.json() as Promise<RepoData>) : null))
    .then((json) => {
      if (json && typeof json.stargazers_count === "number") {
        dataCache.set(repo, { data: json, expires: Date.now() + CACHE_TTL_MS });
        return json;
      }
      return null;
    })
    .catch(() => null)
    .finally(() => {
      inflight.delete(repo);
    });

  inflight.set(repo, request);
  return request;
}

export function GitHubStats({ repo }: { repo: string }) {
  const [data, setData] = useState<RepoData | null>(null);

  useEffect(() => {
    let cancelled = false;

    getRepoStats(repo).then((stats) => {
      if (!cancelled && stats) {
        setData(stats);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  if (!data) return null;

  return (
    <div className="text-muted flex items-center gap-3 text-xs">
      {data.stargazers_count > 0 && (
        <span className="flex items-center gap-1">
          <Star className="h-3 w-3" />
          {data.stargazers_count}
        </span>
      )}
      {data.forks_count > 0 && (
        <span className="flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          {data.forks_count}
        </span>
      )}
    </div>
  );
}
