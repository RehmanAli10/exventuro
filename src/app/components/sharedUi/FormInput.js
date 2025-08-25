"use client";
import React from "react";
import { Controller } from "react-hook-form";

const FormInput = ({
  label,
  name,
  type = "text",
  control,
  register,
  rules,
  errors,
  placeholder,
  isTextArea = false,
  children,
  isDisable = false,
  value,
}) => {
  const error = errors?.[name];

  if (children && control) {
    return (
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          {label} {rules?.required && <span className="text-red-500">*</span>}
        </label>

        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) =>
            typeof children === "function"
              ? children(field)
              : React.cloneElement(children, { ...field })
          }
        />

        {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
        {label} {rules?.required && <span className="text-red-500">*</span>}
      </label>

      {isTextArea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border ${
            error ? "border-red-500" : "border-gray-500"
          } placeholder-gray-500 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          {...(register ? register(name, rules) : {})}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border ${
            error ? "border-red-500" : "border-gray-500"
          } placeholder-gray-500 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          {...(register ? register(name, rules) : {})}
          disabled={isDisable}
        />
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormInput;
