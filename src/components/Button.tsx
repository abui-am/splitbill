import clsx from "clsx";

const variants = {
  base: "bg-gray-900 font-medium text-white",
  outlined: "font-medium border border-gray-900",
};
const Button = ({
  className,
  variant = "base",
  ...props
}: JSX.IntrinsicElements["button"] & {
  variant?: "base" | "outlined";
}) => {
  return (
    <button
      className={clsx(
        className,
        "w-full rounded-lg  px-3 py-2",
        variants[variant]
      )}
      {...props}
    />
  );
};

export default Button;
