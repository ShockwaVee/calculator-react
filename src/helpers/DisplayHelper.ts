export const maxNumberOfCharacters = 16;

export function isInputRowAtZero(row: string) {
  return row === '0';
}

export function isPressedCharacterEquals(character: string | number) {
  return character === '=';
}

export function isInputAtMinLength(row: string) {
  return row.length <= 0;
}

export function isInputAtMaxLength(row: string) {
  return row.length > maxNumberOfCharacters;
}
