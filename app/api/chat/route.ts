import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const url = process.env.N8N_WEBHOOK_URL!;
    const secret = process.env.N8N_WEBHOOK_SECRET!;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-veerdee-secret': secret, // doit matcher le Header Auth du node Webhook
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Proxy error' }, { status: 500 });
  }
}
