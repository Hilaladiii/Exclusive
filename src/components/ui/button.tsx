import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "big" | "small";
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "big",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "text-base font-medium rounded transition-colors duration-300",
        {
          "text-white py-4 px-12": size === "big",
          "text-white py-3 px-8": size === "small",
          "bg-secondary2 hover:bg-hover1": variant === "primary",
          "text-blacks hover:text-text1 bg-white hover:bg-white/30 border border-black/50 hover:border-black/30":
            variant === "secondary",
        },
        className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
