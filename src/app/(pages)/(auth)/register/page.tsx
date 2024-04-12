"use client";
import RegisterForm from "@/components/RegisterForm";
import { MainLayout } from "@/components/layouts/MainLayout";
import Image from "next/image";

const RegisterPage = () => {
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
        <div className="w-full max-w-md">
          <h1 className="text-3xl mb-6">Create an account</h1>
          <p className="mb-12">Enter your details below</p>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
