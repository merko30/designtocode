import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const buttonStyles = cva(
  "py-4 px-16 text-sm font-semibold rounded-lg cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white drop-shadow-[0_4px_4px_var(--color-primary)]",
        outline: "bg-white text-primary border-2 border-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({ children, className, variant, ...props }) => (
  <button className={twMerge(buttonStyles({ variant }), className)} {...props}>
    {children}
  </button>
);

export default Button;
