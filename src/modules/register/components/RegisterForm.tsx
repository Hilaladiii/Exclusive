"use client";

import Button from "@/common/components/elements/Button";
import Input from "@/common/components/elements/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserType, userSchema } from "@/common/types/user";
import { registerMutation } from "@/queries/userQuery";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

interface Message {
  message?: string;
  status?: number;
}

const RegisterForm = () => {
  const registerUser = registerMutation();
  const [message, setMessage] = useState<Message>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = async (data: UserType) => {
    const res = await registerUser.mutateAsync(data);
    if (typeof res === "string") {
      setMessage({ message: res });
    } else {
      setMessage(res);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <Input
        label="Firstname"
        register={register}
        error={errors.firstname}
        type="text"
        name="firstname"
        placeholder="Firstname"
        variant="secondary"
      />
      <Input
        label="Lastname"
        register={register}
        error={errors.lastname}
        type="text"
        name="lastname"
        placeholder="Lastname"
        variant="secondary"
      />
      <Input
        label="Email"
        register={register}
        error={errors.email}
        type="email"
        name="email"
        placeholder="Email"
        variant="secondary"
      />
      <Input
        label="Password"
        register={register}
        error={errors.password}
        type="password"
        name="password"
        placeholder="Password"
        variant="secondary"
      />
      <p
        className={clsx("mt-2 text-center text-sm text-black", {
          "text-red-500": message.status === 400,
        })}
      >
        {message.message}
      </p>
      <Button
        type="submit"
        className="w-full"
        disabled={registerUser.isPending}
      >
        {registerUser.isPending ? "Creating..." : "Create Account"}
      </Button>
      <p className="mt-2 text-center">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
