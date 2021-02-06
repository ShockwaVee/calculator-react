import React, {KeyboardEvent} from "react";
import {DisplayProps} from "./interfaces/DisplayProps";

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
    <div>
      <p>{topRow}</p>
      <input ref={ref} autoFocus onKeyDown={handleKeyDown} onChange={onExpressionChange} value={bottomRow}/>
    </div>
  );
})
