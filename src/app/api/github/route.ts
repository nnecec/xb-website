import { NextResponse } from 'next/server'

const OWNER = 'nnecec'
const REPO = 'xb'

interface GitHubRepo {
  stargazers_count: number
}

interface GitHubRelease {
  tag_name: string
}

async function fetchGitHubData() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'xb-website',
  }

  const [repoRes, releaseRes] = await Promise.all([
    fetch(`https://api.github.com/repos/${OWNER}/${REPO}`, {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`, {
      headers,
      next: { revalidate: 3600 },
    }),
  ])

  if (!repoRes.ok) {
    throw new Error('Failed to fetch GitHub data')
  }

  const [repo, release]: [GitHubRepo, GitHubRelease] = await Promise.all([
    repoRes.json(),
    releaseRes.json().catch(() => ({ tag_name: 'v1.0.0' })),
  ])

  return {
    stars: repo?.stargazers_count || 0,
    version: release?.tag_name || 'v1.0.0',
  }
}

export async function GET() {
  try {
    const data = await fetchGitHubData()

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch {
    return NextResponse.json(
      { stars: 0, version: 'v1.0.0' },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      },
    )
  }
}
