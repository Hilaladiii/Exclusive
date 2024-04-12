import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserType, userSchema } from "@/types/user";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data: UserType) => {
    console.log(data);
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
      <div className="flex justify-between items-center">
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
