"use client";

import Button from "@/common/components/elements/button";
import Input from "@/common/components/elements/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

type LoginType = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<String>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginType) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.status == 401) {
        setErrorMessage("Email or Password incorrect");
      }
      if (res?.ok) {
        router.push("/");
      }
    } catch (error) {
      setErrorMessage((error as TypeError).name);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <Input
        label="Email"
        register={register}
        error={errors.email}
        type="email"
        name="email"
        placeholder="email"
        variant="secondary"
      />
      <Input
        label="Password"
        register={register}
        error={errors.password}
        type="password"
        name="password"
        placeholder="password"
        variant="secondary"
      />
      <p className="text-center text-sm text-red-500">{errorMessage}</p>
      <div className="flex items-center justify-between">
        <Button type="submit">{isSubmitting ? "Loading..." : "Login"}</Button>
        <Link href="/" className="text-sm text-secondary2">
          Forget Password?
        </Link>
      </div>
      <Button variant="secondary" className="w-full">
        Login with Google
      </Button>
      <p className="mt-2 text-center">
        Dont have an account?{" "}
        <Link href="/register" className="underline">
          Register
        </Link>
      </p>
    </form>
  );
}
