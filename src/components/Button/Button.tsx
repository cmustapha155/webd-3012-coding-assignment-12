import React from "react";
import { ButtonProps } from "./Button.types.ts";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type = {props.type}
      disabled = {props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;