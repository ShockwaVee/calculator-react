import React, {FunctionComponent} from "react";
import {KeypadProps} from "./interfaces/KeypadProps";
import {Button} from "../button/Button";
import styles from './Keypad.module.scss'
import {ButtonConfiguration} from "./interfaces/ButtonConfiguration";
import {generateButtonConfiguration} from "../../../helpers/KeypadHelper";

export const Keypad: FunctionComponent<KeypadProps> = (keypadProps) => {
  const availableButtonsConfiguration = generateButtonConfiguration(keypadProps);

  const renderButtons = () => {
    return availableButtonsConfiguration.map((buttonConfiguration: ButtonConfiguration) => {
      return (
        <Button key={buttonConfiguration.label} onKeypadButtonPress={buttonConfiguration.onKeypadButtonPress}
                isGreen={buttonConfiguration.isGreen} isRed={buttonConfiguration.isRed}>
          {buttonConfiguration.label}
        </Button>
      )
    })
  }

  return (
    <div className={styles.wrapper}>
      {renderButtons()}
    </div>
  );
}
