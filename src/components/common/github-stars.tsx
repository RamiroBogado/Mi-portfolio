"use client";

import { useEffect, useState } from "react";
import { Star, GitFork } from "lucide-react";

interface RepoData {
  stargazers_count: number;
  forks_count: number;
}

export function GitHubStats({ repo }: { repo: string }) {
  const [data, setData] = useState<RepoData | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((json: RepoData) => {
        if (!cancelled && json.stargazers_count !== undefined) {
          setData(json);
        }
      })
      .catch(() => {});

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
