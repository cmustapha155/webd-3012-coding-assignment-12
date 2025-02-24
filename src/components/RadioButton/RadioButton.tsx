import React from "react";
import { RadioButtonProps } from "./RadioButton.types.ts";

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <input
      type = "radio"
      name = {props.name}
      value = {props.value}
      disabled = {props.disabled}
    /> /* jsx requires closing forward slash */
  );
};

export default RadioButton;