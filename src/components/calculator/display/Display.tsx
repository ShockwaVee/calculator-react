import React, {KeyboardEvent} from "react";
import {DisplayProps} from "./interfaces/DisplayProps";
import styles from './Display.module.scss';

export const Display = React.forwardRef<HTMLInputElement, DisplayProps>((displayProps, ref) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      displayProps.onCalculateResult();
    }
  }

  return (
    <div className={styles.wrapper}>
      <p data-test="historyRow" className={styles.historyRow}>{displayProps.historyRow}</p>
      <input data-test="inputRow" className={styles.input} ref={ref} autoFocus onKeyDown={handleKeyDown}
             onChange={displayProps.onExpressionChange} value={displayProps.inputRow}/>
    </div>
  );
})
