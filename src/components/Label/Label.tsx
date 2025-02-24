import React, { useState } from "react";
import { LabelProps } from "./Label.types.ts";

const Label: React.FC<LabelProps> = (props) => {
  // variable isDisabled manages state. setIsDisabled function automatically provided. Maps property to this variable
  // const [isDisabled, setIsDisabled] = useState(props.is_disabled);

  return (
    <label
      htmlFor = {props.for} // 'for' is a js reserved word
    >
      {props.text}
    </label>
  );
};

export default Label;