import { z } from "zod";

export const userSchema = z.object({
  firstname: z.string().min(5, "minimum username is 5 characters"),
  lastname: z.string().min(5, "minimum username is 5 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password is too short")
    .max(20, "password is to long"),
});

export type UserType = z.infer<typeof userSchema>;
