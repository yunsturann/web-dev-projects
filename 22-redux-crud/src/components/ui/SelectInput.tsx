import { cn } from "@/lib/utils";
import React, { SelectHTMLAttributes, forwardRef } from "react";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  data: { value: string; label: string }[];
  error?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (props, ref) => {
    const {
      className,
      placeholder,
      label,
      data,
      id,
      required,
      error,
      ...rest
    } = props;

    return (
      <div className="flex-1 w-full flex flex-col">
        {label && (
          <label htmlFor={id || label}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <select
          {...rest}
          ref={ref}
          id={id || label}
          className={cn(
            "group border border-black rounded-md outline-none py-1 px-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-400 transition",
            className
          )}
        >
          <option value="" className="text-gray-400 group-focus:hidden">
            {placeholder || `Select ${label}`}
          </option>
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";

export default SelectInput;
