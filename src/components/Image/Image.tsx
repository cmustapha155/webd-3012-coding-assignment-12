import React from "react";
import { ImageProps } from "./Image.types.ts";

const Image: React.FC<ImageProps> = (props) => {
  return (
    <img
      alt = {props.label}
      src = {props.source}
      className = {props.className}
    />
  );
};

export default Image;