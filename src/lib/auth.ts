import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function verifyAdminToken() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;

    if (!token) {
      return null;
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    if (payload.role !== 'admin') {
      return null;
    }

    return { email: payload.email, role: payload.role };
  } catch (error) {
    return null;
  }
}

export async function requireAdmin() {
  const user = await verifyAdminToken();
  
  if (!user) {
    throw new Error('Unauthorized');
  }
  
  return user;
}
