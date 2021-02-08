import {ChangeEvent} from "react";

export  interface DisplayProps {
  historyRow: string;
  inputRow: string;
  onExpressionChange: (event: ChangeEvent) => void;
  onCalculateResult: () => void;
}
