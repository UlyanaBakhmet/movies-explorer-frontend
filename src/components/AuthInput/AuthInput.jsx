import React from "react";

export default function AuthInput({
  labelClassName,
  labelText,
  value,
  name,
  type,
  id,
  defaultValue,
  inputClassName,
  placeholder,
  onChange,
  minLength,
  maxLength,
}) {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        className={inputClassName}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </>
  );
}
