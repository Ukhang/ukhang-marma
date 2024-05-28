import { cn } from "@/utils";
import React from "react";

type TVariant = "primary" | "secondary" | undefined;

interface ButtonProps {
  children: React.ReactNode;
  variant?: TVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, className, children, ...rest }) => {
  const getVariant = (variant: TVariant): string => {
    switch (variant) {
      case "primary":
        return "bg-[#E5E5EA] border border-[#E5E5EA] text-primary py-2 px-4 rounded-lg";
      case "secondary":
        return "bg-[#444444]/20 text-[#444444] py-2 px-4 rounded-lg font-semibold";
      default:
        return "bg-black text-white rounded";
    }
  };

  return (
    <button 
        {...rest} 
        className={cn("p-4 rounded font-medium", getVariant(variant), className)}
    >
      {children}
    </button>
  );
};

export default Button;