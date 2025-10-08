import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";
import { SignJWT } from "jose";

export const runtime = "nodejs";

type LoginPayload = {
  email: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const body: LoginPayload = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // Check credentials against environment variables or use defaults
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@fielduo.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Create JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-key');
    const token = await new SignJWT({ email, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    // Set HTTP-only cookie
    const response = NextResponse.json({ success: true, message: "Login successful" });
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
