import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'spot-my-brew-api',
    timestamp: new Date().toISOString(),
  });
}
