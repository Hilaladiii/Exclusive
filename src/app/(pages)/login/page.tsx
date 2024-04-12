"use client";
import LoginForm from "@/components/LoginForm";
import { MainLayout } from "@/components/layouts/MainLayout";
import Image from "next/image";

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="w-full flex justify-between items-center">
        <Image
          src="/ilustration.gif"
          width={600}
          height={600}
          alt="ilustration people shopping"
          priority
        />
        <div className="w-full max-w-lg">
          <h1 className="text-3xl mb-3">Log in to Exclusive</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
