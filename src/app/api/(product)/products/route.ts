import { getProductById, getProducts } from "@/db/dbProduct";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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
    const res = await getProducts();
    return NextResponse.json(
      {
        data: res.data,
        message: res.message,
      },
      { status: res.status },
    );
  }
}
