import { NextResponse } from 'next/server'

import { fetchPosts } from '@/entities'

export async function GET() {
    const data = await fetchPosts()
    return NextResponse.json(data)
}
