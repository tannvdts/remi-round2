import React, { ForwardedRef } from "react";

const Input = ({ className, placeholder, ...otherProps }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      className={`${className} px-3 py-2 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`}
      placeholder={placeholder}
      {...otherProps}
    />
  )
}

export default React.forwardRef(Input);