import { NextResponse } from "next/server";

const REVALIDATE_SECONDS = 3600;
const REPO_PATTERN = /^[\w.-]+\/[\w.-]+$/;

export async function GET(request: Request) {
  const repo = new URL(request.url).searchParams.get("repo");

  if (!repo || !REPO_PATTERN.test(repo)) {
    return NextResponse.json({ error: "Invalid repo. Expected owner/name." }, { status: 400 });
  }

  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers,
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Upstream GitHub request failed." }, { status: res.status });
  }

  const json = await res.json();

  return NextResponse.json({
    stargazers_count: typeof json.stargazers_count === "number" ? json.stargazers_count : 0,
    forks_count: typeof json.forks_count === "number" ? json.forks_count : 0,
  });
}
