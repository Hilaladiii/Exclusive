import { addProduct } from "@/db/dbProduct";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const productData = await req.formData();
    const res = await addProduct({
      name: productData.get("name") as string,
      description: productData.get("description") as string,
      price: parseFloat(productData.get("price") as string),
      rating: parseFloat(productData.get("rating") as string),
      promotionValue: parseInt(productData.get("promotionValue") as string),
      image: productData.get("image") as File,
    });
    return new Response(res.message, {
      status: res.status,
    });
  } catch (error) {
    console.log(error);
  }
}
