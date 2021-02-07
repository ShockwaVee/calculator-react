import {calculateResult, validateAndNormalizeExpression} from "../../helpers/CalculatorHelper";

it ('should calculate the right result', async () => {
    expect(await calculateResult('2+2')).toEqual('4');
})

it ('should return an error on a badly formatted expression', async () => {
    await expect(calculateResult('2+//-/*')).rejects.toThrow();
})

it ('should return the valid expression if allowed characters are used', () => {
    expect(validateAndNormalizeExpression({
        newExpression: '2+2',
        currentExpression: '2+',
        character: 2,
        isResultActive: false,
    })).toEqual('2+2');
})

it ('should allow to write a float number with the starting zero', () => {
    expect(validateAndNormalizeExpression({
        newExpression: '0.',
        currentExpression: '0',
        character: '.',
        isResultActive: false,
    })).toEqual('0.');
})

it ('should remove the starting zero if any other character than dot is used', () => {
    expect(validateAndNormalizeExpression({
        newExpression: '02',
        currentExpression: '0',
        character: '2',
        isResultActive: false,
    })).toEqual('2');
})

it ('should not allow letters to be added in the expression', () => {
    expect(validateAndNormalizeExpression({
        newExpression: '22a',
        currentExpression: '22',
        character: 'a',
        isResultActive: false,
    })).toEqual('22');
})

it ('should replace the result if the starting character is a digit', () => {
    expect(validateAndNormalizeExpression({
        newExpression: '246',
        currentExpression: '24',
        character: '6',
        isResultActive: true,
    })).toEqual('6');
})

it ('should continue on the result if the starting character is an operand', () => {
    expect(validateAndNormalizeExpression({
        newExpression: '24+',
        currentExpression: '24',
        character: '+',
        isResultActive: true,
    })).toEqual('24+');
})
