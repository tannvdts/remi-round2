import { CommonUIElementProps } from "../types/common-types";

const Label = ({
  className, children, ...otherProps
}: CommonUIElementProps & {
  htmlFor?: string;
}) => {
  return (
    <label className={`${className} text-sm font-bold text-gray-700`} {...otherProps}>
      {children}
    </label>
  )
}

export default Label;