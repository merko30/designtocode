import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...props }) => (
  <button
    className={twMerge(
      "py-4 px-16 text-sm font-semibold bg-primary text-white rounded-lg drop-shadow-[0_4px_4px_var(--color-primary)]",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
