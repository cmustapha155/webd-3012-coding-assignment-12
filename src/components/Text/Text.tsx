import React from "react";
import { TextProps } from "./Text.types.ts";

const Text: React.FC<TextProps> = (props) => {
  switch(props.type) {
    case 'p':
      return <p className = {props.className}>{props.text}</p>
    case 'h1':
      return <h1 className = {props.className}>{props.text}</h1>
    case 'h2':
      return <h2 className = {props.className}>{props.text}</h2>
    case 'h3':
      return <h3 className = {props.className}>{props.text}</h3>
    default:
      return <span className = {props.className}>{props.text}</span>
  }
};

export default Text;