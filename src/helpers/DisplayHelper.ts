export function isInputRowAtMaxLength(row: string) {
  return row.length > 32;
}

export function areInputRowAndCharacterZero(row: string, character: number | string) {
  return isInputRowAtZero(row) && character === 0;
}

export function isInputRowAtZero(row: string) {
  return row === '0';
}

export function isPressedCharacterEquals(character: string | number) {
  return character === '=';
}
