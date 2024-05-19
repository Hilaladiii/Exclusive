"use client";

import { getProductByIdQuery } from "@/queries/productQuery";
import MainDetailProduct from "./MainDetailProduct/MainDetailProduct";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

export default function DetailProduct({ params }: { params: string }) {
  const { data, error, isFetching } = getProductByIdQuery({
    id: params,
  });
  if (error) {
    return <h1>error</h1>;
  }
  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  const productData = data?.data.data;

  return (
    <div className="w-full">
      <MainDetailProduct data={productData} />
      <RelatedProducts />
    </div>
  );
}
