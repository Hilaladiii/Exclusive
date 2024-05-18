import { ProductType, UploadProductType } from "@/common/types/product";
import { prisma } from "@/common/lib/prisma";
import { put } from "@vercel/blob";

export async function addProduct(productData: UploadProductType) {
  try {
    console.log(productData.image);
    console.log(productData);
    const { url } = await put(productData.image.name, productData.image, {
      access: "public",
      multipart: true,
    });
    const image = url;
    console.log(image);
    const res = await prisma.product.create({
      data: {
        name: productData.name,
        description: productData.description,
        price: productData.price,
        rating: productData.rating,
        promotionValue: productData.promotionValue,
        image: image,
      },
    });
    return {
      status: 201,
      message: "success add your product",
      data: res,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}

export async function getProducts() {
  try {
    const res = await prisma.product.findMany();
    return {
      res: 200,
      data: res,
      message: "Success get all products data",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}
