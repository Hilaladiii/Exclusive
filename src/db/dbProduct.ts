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

export async function getProducts(email: string) {
  try {
    const res = await prisma.product.findMany({
      select: {
        image: true,
        promotionValue: true,
        name: true,
        price: true,
        rating: true,
        id_product: true,
      },
      where: {
        wishlists: {
          none: {
            email: email,
          },
        },
      },
    });
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

export async function getProductsPromotion(email: string) {
  try {
    const res = await prisma.product.findMany({
      where: {
        AND: [
          {
            promotionValue: {
              not: 0,
            },
          },
          {
            wishlists: {
              none: {
                email: email,
              },
            },
          },
        ],
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
      include: {
        wishlists: true,
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

export async function wishListProduct({
  email,
  id,
}: {
  email: string;
  id: string;
}) {
  try {
    const res = await prisma.wishList.create({
      data: {
        email: email,
        id_product: id,
      },
    });

    if (res) {
      return {
        status: 201,
        message: "Wishlist Product Successfuly",
        data: res,
      };
    } else {
      return {
        status: 400,
        message: "Wishlist Product Failed",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).name,
    };
  }
}

export async function getWishlist(email: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        wishlists: {
          some: {
            email,
          },
        },
      },
      include: {
        wishlists: {
          select: {
            email: true,
          },
        },
      },
    });

    const res = products.map(({ wishlists, ...product }) => ({
      ...product,
      wishlisted: wishlists.some((wishlist) => wishlist.email === email),
    }));

    return {
      status: 200,
      data: res,
      message: "Success to get wishlist user",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function unWishlistProduct(email: string, id_product: string) {
  try {
    const res = await prisma.wishList.delete({
      where: {
        id_product_email: {
          email: email,
          id_product: id_product,
        },
      },
    });
    return {
      status: 200,
      message: "Success to un-wishlist product",
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function getWishlistCount(email: string) {
  try {
    const res = await prisma.wishList.findMany({
      where: {
        email: email,
      },
    });
    if (res.length <= 0) {
      return {
        status: 404,
        data: 0,
        message: "Wishlist not found",
      };
    }
    return {
      status: 200,
      data: res.length,
      message: "Success get wishlist count",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function addToCartProduct(
  email: string,
  id_product: string,
  quantity: number,
) {
  try {
    const isExist = await prisma.cart.findMany({
      where: {
        id_product: id_product,
        email: email,
      },
    });
    if (isExist.length > 0) {
      const quantity = await prisma.cart.findMany({
        where: { email: email, id_product: id_product },
      });
      const res = await prisma.cart.updateMany({
        data: {
          quantity: quantity[0].quantity + 1,
        },
        where: {
          email: email,
          id_product: id_product,
        },
      });
      return {
        status: 200,
        message: "Success add to cart",
        data: res,
      };
    }
    const res = await prisma.cart.create({
      data: {
        email: email,
        id_product: id_product,
        quantity: quantity,
      },
    });
    return {
      status: 201,
      data: res,
      message: "Succes add to cart",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function getCartProduct(email: string) {
  try {
    const res = await prisma.cart.findMany({
      where: {
        email: email,
      },
      select: {
        id_cart: true,
        id_product: true,
        quantity: true,
        product: {
          select: {
            name: true,
            price: true,
            image: true,
          },
        },
      },
    });
    if (res.length <= 0) {
      return {
        status: 404,
        message: "Cart not found",
        data: [],
      };
    }
    return {
      status: 200,
      message: "Success get cart products",
      data: res,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function updateQuantityCart({
  quantity,
  email,
  id_product,
}: {
  quantity: number;
  email: string;
  id_product: string;
}) {
  try {
    if (quantity == 0) {
      const res = await prisma.cart.deleteMany({
        where: {
          AND: [
            {
              email: email,
            },
            {
              id_product: id_product,
            },
          ],
        },
      });
      return {
        status: 200,
        message: "Success update quantity product",
      };
    }
    const res = await prisma.cart.updateMany({
      data: {
        quantity: quantity,
      },
      where: {
        email: email,
        id_product: id_product,
      },
    });
    console.log(res);
    return {
      status: 200,
      message: "Success update quantity product",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}
