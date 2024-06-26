import { axiosInstance } from "@/common/lib/axios";
import { ProductType, UploadProductType } from "@/common/types/product";
import { AxiosError } from "axios";

export async function AddProduct(productData: UploadProductType) {
  try {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price.toString());
    formData.append("rating", productData.rating.toString());
    formData.append(
      "promotionValue",
      productData.promotionValue?.toString() ?? "",
    );
    formData.append("image", productData.image);

    const res = await axiosInstance.post("/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      message: res.data,
      status: res.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError) {
      const errorMessage = {
        message:
          typeof axiosError.response?.data === "string"
            ? axiosError.response?.data
            : "An unexpected error occurred.",
        status: axiosError.response?.status,
      };
      return errorMessage;
    } else {
      return {
        message: (error as Error).message,
        status: 500,
      };
    }
  }
}

export async function getProducts() {
  try {
    const res = await axiosInstance.get(`/products`);
    return {
      data: res.data,
      status: res.status,
      message: res.data.message,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function getProductsPromotion() {
  try {
    const res = await axiosInstance.get("/products/promotion");
    return {
      data: res.data,
      message: res.data.message,
      status: res.status,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function getProductsPromotionById({ id }: { id: string }) {
  try {
    const res = await axiosInstance.get(`/products/promotion?id=${id}`);
    return {
      data: res.data,
      message: res.data.message,
      status: res.status,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function getProductsById({ id }: { id: string }) {
  try {
    const res = await axiosInstance.get(`/products?id=${id}`);
    return {
      data: res.data,
      message: res.data.message,
      status: res.status,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function wishLisProduct({
  email,
  id,
}: {
  email: string;
  id: string;
}) {
  try {
    const res = await axiosInstance.post("/wishlist/create", { email, id });
    return {
      data: res.data,
      message: res.data.message,
      status: res.status,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function getWishlist() {
  try {
    const res = await axiosInstance.get(`/wishlist`);
    return {
      data: res.data,
      status: res.status,
      message: res.data.message,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function unWishlistProduct(id_product: string) {
  try {
    const res = await axiosInstance.delete("/un-wishlist", {
      data: id_product,
    });
    return {
      message: res.data,
      status: res.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError) {
      const errorMessage: { message?: string; status?: number } = {
        message:
          typeof axiosError.response?.data === "string"
            ? axiosError.response?.data
            : "An unexpected error occurred.",
        status: axiosError.response?.status,
      };
      return errorMessage;
    } else {
      return (error as TypeError).name;
    }
  }
}

export async function getWishlistCount() {
  try {
    const res = await axiosInstance.get("/wishlist/count");
    return {
      data: res.data,
      status: res.status,
      message: res.data.message,
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      status: 500,
    };
  }
}

export async function addToCartProduct(id_product: string, quantity: number) {
  try {
    const res = await axiosInstance.post("/product/cart/create", {
      id_product: id_product,
      quantity: quantity,
    });
    return {
      status: res.status,
      data: res.data,
      message: res.data.message,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function updateQuantityProduct(
  id_product: string,
  quantity: number,
) {
  try {
    const res = await axiosInstance.put("/product/cart/update", {
      id_product: id_product,
      quantity: quantity,
    });
    return {
      status: res.status,
      data: res.data,
      message: res.data.message,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function getCartProduct() {
  try {
    const res = await axiosInstance.get("/product/cart");
    return {
      status: res.status,
      data: res.data,
      message: res.data.message,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}
