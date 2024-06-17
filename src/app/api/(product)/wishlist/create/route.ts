import { wishListProduct } from "@/db/dbProduct";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const res = await wishListProduct({ id: reqBody.id, email: reqBody.email });
  return NextResponse.json(res, { status: res.status });
}
