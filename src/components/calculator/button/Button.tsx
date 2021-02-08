import React, {FunctionComponent} from "react";
import {ButtonProps} from "./interfaces/ButtonProps";
import styles from './Button.module.scss';

export const Button: FunctionComponent<ButtonProps> = (buttonProps) => {
  return (
    <button data-test={`button-${buttonProps.children}`}
            className={`${styles.button} ${buttonProps.isRed ? styles.red : ''} ${buttonProps.isGreen ? styles.green : ''}`}
            onClick={buttonProps.onKeypadButtonPress}>
      {buttonProps.children}
    </button>
  );
}
