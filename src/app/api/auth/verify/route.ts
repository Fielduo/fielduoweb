import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-key');
    const { payload } = await jwtVerify(token, secret);

    return NextResponse.json({ 
      authenticated: true, 
      user: { email: payload.email, role: payload.role } 
    });
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
