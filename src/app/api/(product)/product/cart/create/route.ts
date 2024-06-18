import { authOption } from "@/app/api/auth/[[...nextauth]]/option";
import { addToCartProduct } from "@/db/dbProduct";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id_product, quantity } = await req.json();
  const session = await getServerSession(authOption);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json(
      { message: "User email not available in session" },
      { status: 404 },
    );
  }
  const res = await addToCartProduct(email, id_product, quantity);
  return NextResponse.json(res, { status: res.status });
}
