import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputProps<TInput extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "ref"> {
  name: Path<TInput>;
  register: UseFormRegister<TInput>;
  error: FieldError | undefined;
  label: string;
  variant?: "primary" | "secondary";
}

const Input = <TInput extends FieldValues>({
  className,
  type,
  placeholder,
  name,
  label,
  register,
  error,
  variant = "primary",
  ...props
}: InputProps<TInput>) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <input
        className={cn(
          "text-black  text-base py-2",
          variant === "primary" && "bg-white",
          variant === "secondary" &&
            "bg-white border-b-[1px] border-b-black outline-none",
          className
        )}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        {...props}
      />
      {error && <span className="text-red-400 text-xs">{error.message}</span>}
    </div>
  );
};

export default Input;
