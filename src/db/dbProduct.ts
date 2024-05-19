import { ProductType, UploadProductType } from "@/common/types/product";
import { prisma } from "@/common/lib/prisma";
import { put } from "@vercel/blob";

export async function addProduct(productData: UploadProductType) {
  try {
    const { url } = await put(productData.image.name, productData.image, {
      access: "public",
      multipart: true,
    });
    const image = url;
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

export async function getProductsPromotion() {
  try {
    const res = await prisma.product.findMany({
      where: {
        promotionValue: {
          not: 0,
        },
      },
      select: {
        id_product: true,
        name: true,
        image: true,
        price: true,
        promotionValue: true,
        rating: true,
        size: true,
      },
    });
    return {
      status: 200,
      data: res,
      message: "Success get products promotion",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function getProductsPromotionById({ id }: { id: string }) {
  try {
    const res = await prisma.product.findUnique({
      where: {
        id_product: id,
        promotionValue: {
          not: 0,
        },
      },
    });
    return {
      status: res != null ? 200 : 404,
      data: res,
      message:
        res != null ? "Succes to get product promotion by id" : "not found",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function getProductById({ id }: { id: string }) {
  try {
    const res = await prisma.product.findUnique({
      where: {
        id_product: id,
      },
    });
    return {
      status: res != null ? 200 : 404,
      data: res,
      message: res != null ? "Succes to get product by id" : "not found",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}
