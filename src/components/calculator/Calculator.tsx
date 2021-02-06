import React, {FunctionComponent, useState} from "react";
import {Display} from "./display/Display";
import {Keypad} from "./keypad/Keypad";
import {
  areInputRowAndCharacterZero,
  isInputRowAtMaxLength,
  isInputRowAtZero,
  isPressedCharacterEquals
} from "../../helpers/DisplayHelper";

export const Calculator: FunctionComponent = () => {
  const [topRow, setTopRow] = useState<string>('');
  const [bottomRow, setBottomRow] = useState<string>('0');

  const onButtonPress = async (character: string | number) => {
    if (isPressedCharacterEquals(character)) {
      await calculateResult();
      return;
    }
    if (areInputRowAndCharacterZero(bottomRow, character) || isInputRowAtMaxLength(bottomRow)) {
      return;
    }
    setTopRow('');

    let newBottomRow = bottomRow;

    if (isInputRowAtZero(bottomRow)) {
      newBottomRow = String(character);
    } else {
      newBottomRow += String(character);
    }

    setBottomRow(newBottomRow);
  }

  const calculateResult = async () => {
    const urlEncodedExpression = encodeURIComponent(bottomRow);

    fetch(`${process.env.REACT_APP_MATH_API_BASE_URL}?expr=${urlEncodedExpression}`)
      .then(processResponse)
      .then(showResultAndMoveExpressionToTopRow)
      .catch(showError)
  }

  const moveExpressionToTopRow = () => {
    setTopRow(bottomRow);
  }

  const processResponse = (response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('There was an error');
  }

  const showResultAndMoveExpressionToTopRow = (result: number) => {
    moveExpressionToTopRow();
    setBottomRow(String(result));
  }

  const showError = () => {
    setTopRow('ERROR');
  }


  return (
    <div>
      <Display topRow={topRow} bottomRow={bottomRow}/>
      <br/>
      <Keypad onButtonPress={onButtonPress}/>
    </div>
  );
}
