import React, { ButtonHTMLAttributes } from "react";
import useRipple from "use-ripple-hook";
import { FCC } from "../utils/types";

export const Button: FCC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const [ripple, event] = useRipple();

  return (
    <button
      className={`border-gray-400 border-2 rounded-md p-4 ${className}`}
      ref={ripple}
      onMouseDown={event}
      {...props}
    >
      {children}
    </button>
  );
};
