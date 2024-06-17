import {
  AddProduct,
  getProducts,
  getProductsById,
  getProductsPromotion,
  getProductsPromotionById,
  getWishlist,
  getWishlistCount,
  unWishlistProduct,
  wishLisProduct,
} from "@/services/productService";
import { UploadProductType } from "@/common/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function AddProductMutation() {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (productData: UploadProductType) => AddProduct(productData),
    onSettled: async (_, error) => {
      if (error) {
        throw new Error(error.toString());
      } else {
        await queryclient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
}

export function getProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 10,
  });
}

export function getProductsPromotionQuery() {
  return useQuery({
    queryKey: ["products-promotion"],
    queryFn: () => getProductsPromotion(),
    staleTime: 1000 * 60 * 10,
  });
}

export function getProductsPromotionByIdQuery({ id }: { id: string }) {
  return useQuery({
    queryKey: ["products", { id }],
    queryFn: () => getProductsPromotionById({ id }),
    staleTime: Infinity,
  });
}

export function getProductByIdQuery({ id }: { id: string }) {
  return useQuery({
    queryKey: ["products", { id }],
    queryFn: () => getProductsById({ id }),
    staleTime: Infinity,
  });
}

export function wishListProductMutation() {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, email }: { id: string; email: string }) =>
      wishLisProduct({ id, email }),
    onSettled: async (_, error) => {
      if (error) {
        throw new Error(error.toString());
      } else {
        await queryclient.invalidateQueries({
          queryKey: ["products"],
        });
        await queryclient.invalidateQueries({
          queryKey: ["products-promotion"],
        });
        await queryclient.invalidateQueries({
          queryKey: ["wishlist"],
        });
        await queryclient.invalidateQueries({
          queryKey: ["wishlist-count"],
        });
      }
    },
  });
}

export function getWishlistQuery() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlist(),
    staleTime: Infinity,
  });
}

export function unWishlistProductMutation() {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (id_product: string) => unWishlistProduct(id_product),
    onSettled: async (_, error) => {
      if (error) {
        throw new Error(error.toString());
      } else {
        await queryclient.invalidateQueries({
          queryKey: ["wishlist"],
        });
        await queryclient.invalidateQueries({
          queryKey: ["wishlist-count"],
        });
      }
    },
  });
}

export function getWishlistCountQuery() {
  return useQuery({
    queryKey: ["wishlist-count"],
    queryFn: () => getWishlistCount(),
    staleTime: Infinity,
  });
}
