import React from "react";
import { DropdownProps } from "./Dropdown.types.ts";

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <select name = {props.name} id = {props.id} disabled = {props.disabled}>
      <option>{props.option1}</option>
      <option>{props.option2}</option>
      <option>{props.option3}</option>
    </select>
  );
};

export default Dropdown;