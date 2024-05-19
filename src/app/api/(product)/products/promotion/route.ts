import { getProductsPromotion, getProductsPromotionById } from "@/db/dbProduct";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const res = await getProductsPromotionById({ id });
    return NextResponse.json(
      { data: res.data, message: res.message },
      { status: res.status },
    );
  } else {
    const res = await getProductsPromotion();
    return NextResponse.json(
      { data: res.data, message: res.message },
      { status: res.status },
    );
  }
}
