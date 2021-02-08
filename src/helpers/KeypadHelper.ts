import {KeypadProps} from "../components/calculator/keypad/interfaces/KeypadProps";

export const generateButtonConfiguration = (keypadProps: KeypadProps) => {
  return [
    {
      label: '(',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('('),
    },
    {
      label: ')',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress(')'),
    },
    {
      label: 'C',
      onKeypadButtonPress: keypadProps.clearExpression,
      isRed: true,
    },
    {
      label: 'CE',
      onKeypadButtonPress: keypadProps.clearEntryExpression,
      isRed: true,
    },
    {
      label: '1',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('1'),
    },
    {
      label: '2',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('2'),
    },
    {
      label: '3',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('3'),
    },
    {
      label: '*',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('*'),
    },
    {
      label: '4',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('4'),
    },
    {
      label: '5',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('5'),
    },
    {
      label: '6',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('6'),
    },
    {
      label: '-',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('-'),
    },
    {
      label: '7',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('7'),
    },
    {
      label: '8',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('8'),
    },
    {
      label: '9',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('9'),
    },
    {
      label: '+',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('+'),
    },
    {
      label: '.',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('.'),
    },
    {
      label: '0',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('0'),
    },
    {
      label: '=',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('='),
      isGreen: true,
    },
    {
      label: '/',
      onKeypadButtonPress: () => keypadProps.onKeypadButtonPress('/'),
    },
  ]
};
