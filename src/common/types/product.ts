import { z } from "zod";

enum Size {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
}

const MAX_FILE_SIZE = 200000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productSchema = z.object({
  // id_product: z.string(),
  name: z.string().max(50).min(1, "required"),
  price: z.coerce.number().nonnegative(),
  rating: z.coerce.number().nonnegative(),
  promotionValue: z.coerce.number().optional(),
  description: z.string(),
  // size: z.nativeEnum(Size),
});

export const uploadProductSchema = z.object({
  name: z.string().max(50),
  price: z.coerce.number().nonnegative(),
  rating: z.coerce.number().nonnegative(),
  promotionValue: z.coerce.number(),
  description: z.string(),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 2MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    ),
});

export const getProductSchema = z
  .object({
    image: z.string(),
  })
  .merge(productSchema);

export type ProductType = z.infer<typeof productSchema>;
export type UploadProductType = z.infer<typeof uploadProductSchema>;
export type getProductType = z.infer<typeof getProductSchema>;
