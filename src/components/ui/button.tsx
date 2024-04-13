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
          "py-3 px-12": size === "big",
          "py-2 px-8": size === "small",
          "text-white bg-secondary2 hover:bg-hover1": variant === "primary",
          "text-black hover:text-text1 bg-white hover:bg-white/30 border border-black/50 hover:border-black/30":
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
