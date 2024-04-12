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
}

const Input = <TInput extends FieldValues>({
  className,
  type,
  placeholder,
  name,
  label,
  register,
  error,
  ...props
}: InputProps<TInput>) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className={cn("", className)}
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
