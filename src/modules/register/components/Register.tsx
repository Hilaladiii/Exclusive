import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className="w-full flex justify-between items-center mt-14">
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
  );
}
