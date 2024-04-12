import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { UserType, userSchema } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

type LoginType = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginType) => {
    console.log(data);
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
      <div className="flex justify-between items-center">
        <Button type="submit">Log in</Button>
        <Link href="/" className="text-sm text-secondary2">
          Forget Password?
        </Link>
      </div>
      <Button variant="secondary" className="w-full">
        Login with Google
      </Button>
    </form>
  );
};

export default LoginForm;
