"use client";

import Button from "@/common/components/elements/Button";
import Input from "@/common/components/elements/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  uploadProductSchema,
  ProductType,
  UploadProductType,
} from "@/common/types/product";
import { AddProductMutation } from "@/queries/productQuery";
import { useState } from "react";
import clsx from "clsx";
import { MainLayout } from "@/common/components/layouts/MainLayout";

interface Message {
  message?: string;
  status?: number;
}

const AddProductForm = () => {
  const addProduct = AddProductMutation();
  const [message, setMessage] = useState<Message>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadProductType>({
    resolver: zodResolver(uploadProductSchema),
  });
  const onSubmit = async (data: UploadProductType) => {
    const file = data.image instanceof FileList ? data.image[0] : data.image;
    const uploadData = {
      ...data,
      image: file,
    };
    const res = await addProduct.mutateAsync(uploadData);
    if (typeof res === "string") {
      setMessage({ message: res });
    } else {
      setMessage(res);
    }
  };
  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        <Input
          label="name"
          register={register}
          error={errors.name}
          type="text"
          name="name"
          placeholder="Name"
          variant="secondary"
        />
        <Input
          label="Price"
          register={register}
          error={errors.price}
          type="number"
          name="price"
          placeholder="Price"
          variant="secondary"
        />
        <Input
          label="Rating"
          register={register}
          error={errors.rating}
          type="number"
          name="rating"
          placeholder="rating"
          variant="secondary"
        />
        <Input
          label="promotionValue"
          register={register}
          error={errors.promotionValue}
          type="number"
          name="promotionValue"
          placeholder="promotion value"
          variant="secondary"
        />
        <Input
          label="description"
          register={register}
          error={errors.description}
          type="text"
          name="description"
          placeholder="promotion value"
          variant="secondary"
        />
        <Input
          label="Image"
          register={register}
          error={errors.image}
          type="file"
          name="image"
          variant="secondary"
        />
        <p
          className={clsx("mt-2 text-center text-sm text-black", {
            "text-red-500": message.status === 400,
          })}
        >
          {message.message}
        </p>
        <Button type="submit" className="w-full">
          {addProduct.isPending ? "Uploading..." : "Upload"}
        </Button>
      </form>
    </MainLayout>
  );
};

export default AddProductForm;
