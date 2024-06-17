import { getProductById, getProducts } from "@/db/dbProduct";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOption } from "../../auth/[[...nextauth]]/option";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOption);
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const res = await getProductById({ id });
    return NextResponse.json(
      {
        data: res.data,
        message: res.message,
      },
      { status: res.status },
    );
  } else {
    if (session) {
      const email = session.user!.email;
      if (!email) {
        return NextResponse.json(
          { message: "User email not available in session" },
          { status: 400 },
        );
      }
      const res = await getProducts(email);
      return NextResponse.json(
        {
          data: res.data,
          message: res.message,
        },
        { status: res.status },
      );
    }
  }
}
