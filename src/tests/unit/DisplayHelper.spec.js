import {isInputAtMinLength, isInputRowAtZero, isPressedCharacterEquals} from "../../helpers/DisplayHelper";

it ('should return true if string is 0', async () => {
    expect(isInputRowAtZero('0')).toEqual(true);
})

it ('should return true if string is the equals character', async () => {
    expect(isPressedCharacterEquals('=')).toEqual(true);
})

it ('should return true on empty string', async () => {
    expect(isInputAtMinLength('')).toEqual(true);
})
