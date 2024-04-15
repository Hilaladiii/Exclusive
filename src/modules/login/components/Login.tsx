import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="flex w-full items-center justify-between">
      <Image
        src="/ilustration.gif"
        width={600}
        height={600}
        alt="ilustration people shopping"
        priority
      />
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-3xl">Log in to Exclusive</h1>
        <p className="mb-12">Enter your details below</p>
        <LoginForm />
      </div>
    </div>
  );
}
