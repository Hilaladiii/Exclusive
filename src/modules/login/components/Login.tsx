import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="w-full flex justify-between items-center">
      <Image
        src="/ilustration.gif"
        width={600}
        height={600}
        alt="ilustration people shopping"
        priority
      />
      <div className="w-full max-w-md">
        <h1 className="text-3xl mb-6">Log in to Exclusive</h1>
        <p className="mb-12">Enter your details below</p>
        <LoginForm />
      </div>
    </div>
  );
}
