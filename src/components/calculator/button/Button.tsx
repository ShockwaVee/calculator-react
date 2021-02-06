import React, {FunctionComponent} from "react";
import {ButtonProps} from "./interfaces/ButtonProps";

export const Button: FunctionComponent<ButtonProps> = ({onButtonPress, children}) => {
  return (
    <button onClick={onButtonPress}>
      {children}
    </button>
  );
}
