import { authOption } from "@/app/api/auth/[[...nextauth]]/option";
import { getWishlistCount } from "@/db/dbProduct";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOption);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json(
      { message: "User email not available in session" },
      { status: 400 },
    );
  }
  const res = await getWishlistCount(email);
  return NextResponse.json(res, { status: res.status });
}
