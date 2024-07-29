import React, { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "text";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className,
  isLoading,
  ...props
}) => {
  const baseStyles =
    "rounded-[10px] focus:outline-none w-fit mx-auto transition-all duration-200 ease-in-out tracking-[0.36px] leading-[100%] md:font-medium font-normal hover:-translate-y-0.5";

  const variantStyles = clsx({
    "text-white bg-[#B85042] shadow-[0px_13px_22.6px_0px_rgba(255,255,255,0.10)_inset,0px_0px_0px_2px_rgba(255,255,255,0.18)_inset] border-[#B85042] border":
      variant === "primary",
    "text-[#B85042] bg-white border-2 border-[#FAEDED]":
      variant === "secondary",
    "text-[#B85042] !p-0 border-[#FAEDED] font-normal": variant === "text",
  });

  const sizeStyles = clsx({
    "py-[0.75rem] px-[1.5rem] text-[0.875rem]": size === "small",
    "py-[0.75rem] px-[1.5rem] text-[1.125rem] font-normal": size === "medium",
    "md:py-[1.1875rem] py-3 px-[1.75rem] md:text-[1.125rem] text-[0.875rem]":
      size === "large",
  });

  return (
    <button
      className={clsx(
        outfit.className,
        baseStyles,
        variantStyles,
        sizeStyles,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
