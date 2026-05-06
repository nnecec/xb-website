import { siteConfig } from '@/app/site'

export function getGitHubRepoParts(): { owner: string; repo: string } {
  const m = siteConfig.repoUrl.match(/github\.com\/([^/]+)\/([^/?#]+)/i)
  if (!m) {
    throw new Error(`siteConfig.repoUrl is not a GitHub URL: ${siteConfig.repoUrl}`)
  }
  return { owner: m[1], repo: m[2] }
}

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'xb-website',
  }
  const token = process.env.GITHUB_TOKEN
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}

export interface GitHubReleaseItem {
  tag_name: string
  name: string | null
  body: string | null
  published_at: string
  html_url: string
  prerelease: boolean
}

export async function fetchRecentReleases(limit: number): Promise<GitHubReleaseItem[]> {
  const { owner, repo } = getGitHubRepoParts()
  const url = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${limit}&page=1`
  const res = await fetch(url, {
    headers: githubHeaders(),
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    return []
  }
  const data: unknown = await res.json()
  if (!Array.isArray(data)) {
    return []
  }
  return data
    .filter((r): r is GitHubReleaseItem => {
      if (!r || typeof r !== 'object') return false
      const o = r as Record<string, unknown>
      return (
        typeof o.tag_name === 'string' &&
        typeof o.published_at === 'string' &&
        typeof o.html_url === 'string' &&
        typeof o.prerelease === 'boolean'
      )
    })
    .slice(0, limit)
}

interface GitHubRepo {
  stargazers_count: number
}

interface GitHubLatestRelease {
  tag_name: string
}

export async function fetchRepoStarsAndLatestVersion(): Promise<{
  stars: number
  version: string
}> {
  const { owner, repo } = getGitHubRepoParts()
  const headers = githubHeaders()

  const [repoRes, releaseRes] = await Promise.all([
    fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, {
      headers,
      next: { revalidate: 3600 },
    }),
  ])

  if (!repoRes.ok) {
    throw new Error('Failed to fetch GitHub repo')
  }

  const [repoJson, releaseJson]: [GitHubRepo, GitHubLatestRelease] = await Promise.all([
    repoRes.json(),
    releaseRes.json().catch(() => ({ tag_name: 'v1.0.0' })),
  ])

  return {
    stars: repoJson?.stargazers_count ?? 0,
    version: releaseJson?.tag_name ?? 'v1.0.0',
  }
}
