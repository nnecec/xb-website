import { NextResponse } from 'next/server'

import { fetchRepoStarsAndLatestVersion } from '@/lib/github'

export async function GET() {
  try {
    const data = await fetchRepoStarsAndLatestVersion()

    return NextResponse.json(
      { ...data, commits: 0 },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch {
    return NextResponse.json(
      { stars: 0, version: 'v1.0.0', commits: 0 },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      },
    )
  }
}
