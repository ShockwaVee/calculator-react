import React, {FunctionComponent} from "react";
import {ButtonProps} from "./interfaces/ButtonProps";

export const Button: FunctionComponent<ButtonProps> = ({onKeypadButtonPress, children}) => {
  return (
    <button onClick={onKeypadButtonPress}>
      {children}
    </button>
  );
}
