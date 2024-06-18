"use client";

import Button from "@/common/components/elements/Button";
import {
  getCartProductQuery,
  updateQuantityCartMutation,
} from "@/queries/productQuery";
import Image from "next/image";

export default function Cart() {
  const { data, isLoading } = getCartProductQuery();
  const updateQuantityMutation = updateQuantityCartMutation();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const cartData = data?.status == 500 ? [] : data?.data.data;

  const handleUpdateQuantity = async (id_product: string, quantity: number) => {
    await updateQuantityMutation.mutateAsync({ id_product, quantity });
  };
  return (
    <div className="mt-5 ">
      <h1 className="text-xl font-bold">Cart</h1>
      {cartData.length <= 0 ? (
        <h1 className="mx-auto mb-20 mt-10 text-2xl ">Cart Empty</h1>
      ) : (
        <table className="my-20 w-full text-center" border={1} cellPadding={10}>
          <thead>
            <tr className="text-xl">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((cart: any, index: number) => (
              <tr className="odd:bg-gray-50" key={index}>
                <td className="flex flex-row items-center justify-center gap-4 ">
                  <Image
                    src={cart.product.image}
                    width={30}
                    height={30}
                    alt="test"
                  ></Image>
                  {cart.product.name}
                </td>
                <td>{cart.product.price}</td>
                <td>
                  <div className="space-x-3">
                    <Button
                      variant="outline"
                      size="small"
                      className="px-2 py-0 "
                      onClick={() =>
                        handleUpdateQuantity(cart.id_product, cart.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <span>{cart.quantity}</span>
                    <Button
                      variant="outline"
                      size="small"
                      className="px-2 py-0 "
                      onClick={() =>
                        handleUpdateQuantity(cart.id_product, cart.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td>{cart.product.price * cart.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
