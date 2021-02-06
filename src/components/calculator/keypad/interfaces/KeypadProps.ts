export  interface KeypadProps {
  onKeypadButtonPress: (character: string | number) => void;
  clearExpression: () => void;
  clearEntryExpression: () => void;
}
