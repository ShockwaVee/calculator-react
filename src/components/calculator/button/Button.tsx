import React, {FunctionComponent} from "react";
import {ButtonProps} from "./interfaces/ButtonProps";
import styles from './Button.module.scss';

export const Button: FunctionComponent<ButtonProps> = ({onKeypadButtonPress, children, isGreen, isRed}) => {
  return (
    <button className={`${styles.button} ${isRed ? styles.red : ''} ${isGreen ? styles.green : ''}`}
            onClick={onKeypadButtonPress}>
      {children}
    </button>
  );
}
