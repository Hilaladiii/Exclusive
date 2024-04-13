import { NextRequest } from "next/server";
import { Register } from "@/db/dbUser";

export async function POST(req: NextRequest) {
  const userData = await req.json();
  const res = await Register(userData);
  return new Response(res.message, {
    status: res.status,
  });
}
