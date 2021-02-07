export function isInputRowAtZero(row: string) {
  return row === '0';
}

export function isPressedCharacterEquals(character: string | number) {
  return character === '=';
}

export function isInputAtMinLength(row: string) {
  return row.length <= 0;
}
