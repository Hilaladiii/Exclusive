import { authOption } from "@/app/api/auth/[[...nextauth]]/option";
import { updateQuantityCart } from "@/db/dbProduct";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const reqBody = await req.json();
  const session = await getServerSession(authOption);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json(
      { status: 404, message: "User email not available in session" },
      { status: 404 },
    );
  }
  const res = await updateQuantityCart({
    email: email,
    id_product: reqBody.id_product,
    quantity: reqBody.quantity,
  });

  return NextResponse.json(res, { status: res?.status });
}
