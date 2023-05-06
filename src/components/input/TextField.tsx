import clsx from "clsx";
import { NumericFormat, type NumericFormatProps } from "react-number-format";

export type TextFieldProps = JSX.IntrinsicElements["input"] & {
  label?: string;
  Icon?: JSX.Element;
};

const TextField = ({ label, className, Icon, ...props }: TextFieldProps) => {
  return (
    <div>
      {label && <label className="mb-1 block text-base">{label}</label>}

      <div className="flex">
        {Icon}
        <input
          className={clsx(className, "w-full rounded-lg border p-2")}
          {...props}
        />
      </div>
    </div>
  );
};

const TextFieldNumber = ({
  label,
  defaultValue,
  ...props
}: Omit<NumericFormatProps, "customInput"> & {
  defaultValue?: number | undefined;
  value: number | undefined;
  label?: string;
}) => {
  return (
    <NumericFormat
      defaultValue={defaultValue}
      label={label}
      Icon={
        <div className="mr-1 grid w-14 place-items-center rounded-lg bg-gray-100 text-sm font-medium text-gray-900">
          Rp
        </div>
      }
      allowNegative={false}
      maxLength={20}
      customInput={TextField}
      thousandSeparator=","
      {...props}
    />
  );
};

TextField.Number = TextFieldNumber;

export default TextField;
