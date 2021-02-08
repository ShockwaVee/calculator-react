export interface ButtonConfiguration {
  label: string;
  onKeypadButtonPress: () => void | (() => {});
  isGreen?: boolean;
  isRed?: boolean;
}
