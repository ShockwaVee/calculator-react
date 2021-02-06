import {ChangeEvent} from "react";

export  interface DisplayProps {
  topRow: string;
  bottomRow: string;
  onExpressionChange: (event: ChangeEvent) => void;
  onCalculateResult: () => void;
}
