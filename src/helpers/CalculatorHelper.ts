import {isInputRowAtZero} from "./DisplayHelper";
import {ExpressionValidationData} from "../interfaces/expressionValidationData";

export async  function calculateResult(expression: string): Promise<string> {
  const urlEncodedExpression = encodeURIComponent(expression);

  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_MATH_API_BASE_URL}?expr=${urlEncodedExpression}&precision=5`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('There was an error');
      })
      .then((result: number)=> {
        return resolve(String(result));
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export function validateAndNormalizeExpression({newExpression, currentExpression, character, isResultActive}: ExpressionValidationData) {
  let normalizedCharacter = character != null ? removeLetterAndOtherCharacters(String(character)) : null;
  let normalizedExpression = removeLetterAndOtherCharacters(newExpression);

  if (normalizedCharacter && isResultActive && isCharacterDigitOrParentheses(normalizedCharacter)) {
    return normalizedCharacter;
  }

  if (normalizedExpression === '0' || normalizedExpression.length >= 16) {
    return currentExpression;
  }

  if (isInputRowAtZero(currentExpression) && character !== '.') {
    normalizedExpression = newExpression.slice(1);
  }

  if (normalizedExpression.length <= 0) {
    normalizedExpression = '0';
  }

  return normalizedExpression;
}

function isCharacterDigitOrParentheses(character: string) {
  return /[\d\(\)]/.test(character);
}

function removeLetterAndOtherCharacters(value: string) {
  return value.replace(/[^\d+\-*/\(\)\.]/ig, '')
}
