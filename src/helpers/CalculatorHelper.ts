import {isInputRowAtZero} from "./DisplayHelper";

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

export function validateAndNormalizeExpression(newExpression: string, currentExpression: string) {
  let normalizedExpression = newExpression.replace(/[^\d+\-*/\(\)\.]/ig, '');

  if (normalizedExpression === '0') {
    return currentExpression;
  }

  if (isInputRowAtZero(currentExpression) && newExpression[1] !== '.') {
    normalizedExpression = newExpression.slice(1);
  }
  if (normalizedExpression.length <= 0) {
    normalizedExpression = '0';
  }

  return normalizedExpression;
}
