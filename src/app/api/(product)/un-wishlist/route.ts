import { unWishlistProduct } from "@/db/dbProduct";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOption } from "../../auth/[[...nextauth]]/option";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOption);
  const email = session?.user?.email;

  if (!email) {
    return NextResponse.json(
      { message: "User email not available in session" },
      { status: 404 },
    );
  }
  const id_product = await req.text();
  if (!id_product) {
    return NextResponse.json(
      { message: "id product not provided" },
      { status: 404 },
    );
  }
  const res = await unWishlistProduct(email, id_product);
  return NextResponse.json(res, { status: res.status });
}
