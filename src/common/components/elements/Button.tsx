import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "black";
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
        "rounded text-base font-medium transition-colors duration-300",
        {
          "px-12 py-3": size === "big",
          "px-8 py-2": size === "small",
          "bg-secondary2 text-white hover:bg-hover1": variant === "primary",
          "border border-black/50 bg-white text-black hover:border-black/30 hover:bg-white/30 hover:text-text1":
            variant === "secondary",
          "bg-black text-white hover:bg-black/80": variant === "black",
        },
        className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
