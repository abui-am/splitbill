import clsx from "clsx";

export type TextFieldProps = JSX.IntrinsicElements["input"] & {
  label: string;
};

const TextField = ({ label, className, ...props }: TextFieldProps) => {
  return (
    <div>
      <label className="mb-1 block text-base">{label}</label>
      <input
        className={clsx(className, "w-full rounded-lg border p-2")}
        {...props}
      />
    </div>
  );
};

export default TextField;
