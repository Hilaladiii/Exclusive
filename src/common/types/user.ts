import { z } from "zod";

export const userSchema = z.object({
  firstname: z.string().min(1, "firstname is required"),
  lastname: z.string().min(1, "lastname is required"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password is too short")
    .max(20, "password is to long"),
});

export type UserType = z.infer<typeof userSchema>;
