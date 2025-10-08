import { NextResponse } from "next/server";
import { requireAdmin } from "./auth";

export function withAdminAuth(handler: (request: Request, user: any) => Promise<Response>) {
  return async (request: Request) => {
    try {
      const user = await requireAdmin();
      return await handler(request, user);
    } catch (error) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  };
}
