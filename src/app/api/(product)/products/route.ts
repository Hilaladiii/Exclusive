import { getProducts } from "@/db/dbProduct";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getProducts();
  return NextResponse.json(
    {
      data: res.data,
      message: res.message,
    },
    { status: res.status },
  );
}
