import React, {KeyboardEvent} from "react";
import {DisplayProps} from "./interfaces/DisplayProps";
import styles from './Display.module.scss';

export const Display = React.forwardRef<HTMLInputElement, DisplayProps>(({
                                                                           topRow,
                                                                           bottomRow,
                                                                           onExpressionChange,
                                                                           onCalculateResult
                                                                         }, ref) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onCalculateResult();
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.topRow}>{topRow}</p>
      <input className={styles.input} ref={ref} autoFocus onKeyDown={handleKeyDown} onChange={onExpressionChange} value={bottomRow}/>
    </div>
  );
})
