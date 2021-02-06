import React, {FunctionComponent} from "react";
import {DisplayProps} from "./interfaces/DisplayProps";

export const Display: FunctionComponent<DisplayProps> = ({topRow, bottomRow}) => {

  return (
    <div>
      <p>{topRow}</p>
      <p>{bottomRow}</p>
    </div>
  );
}
