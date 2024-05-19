import {
  AddProduct,
  getProducts,
  getProductsById,
  getProductsPromotion,
  getProductsPromotionById,
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
    staleTime: 1000 * 60 * 5,
  });
}

export function getProductsPromotionQuery() {
  return useQuery({
    queryKey: ["products-promotion"],
    queryFn: () => getProductsPromotion(),
    staleTime: 1000 * 60 * 5,
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