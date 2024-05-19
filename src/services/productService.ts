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
    const res = await axiosInstance.get("/products");
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
