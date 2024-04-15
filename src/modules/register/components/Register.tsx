import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className="mt-14 flex w-full items-center justify-between">
      <Image
        src="/ilustration.gif"
        width={600}
        height={600}
        alt="ilustration people shopping"
        priority
      />
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-3xl">Create an account</h1>
        <p className="mb-12">Enter your details below</p>
        <RegisterForm />
      </div>
    </div>
  );
}
