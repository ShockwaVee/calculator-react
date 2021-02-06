import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from "react";
import {Display} from "./display/Display";
import {Keypad} from "./keypad/Keypad";
import {isInputAtMinLength, isPressedCharacterEquals} from "../../helpers/DisplayHelper";
import {calculateResult, validateAndNormalizeExpression} from "../../helpers/CalculatorHelper";

export const Calculator: FunctionComponent = () => {
  const [topRow, setTopRow] = useState<string>('');
  const [bottomRow, setBottomRow] = useState<string>('0');
  const displayRef = useRef<HTMLInputElement>(null);

  const focusInputField = () => {
    if (displayRef.current == null) {
      return;
    }

    displayRef.current.focus();
  }

  useEffect(() => {
    if (document == null) {
      return;
    }
    document.addEventListener('keydown', focusInputField);

    return () => {
      document.removeEventListener('keydown', focusInputField);
    }
  }, [])

  const onKeypadButtonPress = async (character: string | number) => {
    if (isPressedCharacterEquals(character)) {
      await tryToCalculateResult();
      return;
    }

    const unprocessedExpression = bottomRow + String(character);
    const newExpression = validateAndNormalizeExpression(unprocessedExpression, bottomRow);

    resetTopRow();
    setBottomRow(newExpression);
  }

  const tryToCalculateResult = async () => {
    let result = '';

    try {
      result = await calculateResult(bottomRow)
    } catch (e) {
      showError();
      return;
    }

    showResultAndMoveExpressionToTopRow(result);
  }

  const showResultAndMoveExpressionToTopRow = (result: string) => {
    moveExpressionToTopRow();
    setBottomRow(result);
  }

  const showError = () => {
    setTopRow('ERROR');
  }

  const onExpressionChange = (event: ChangeEvent) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const newExpression = validateAndNormalizeExpression(target.value, bottomRow);

    resetTopRow();
    setBottomRow(newExpression);
  }

  const clearExpression = () => {
    let newBottomRow = bottomRow.slice(0, -1);

    if (isInputAtMinLength(newBottomRow)) {
      resetBottomRow();
      return;
    }

    resetTopRow();
    setBottomRow(newBottomRow);
  }

  const clearEntryExpression = () => {
    resetTopRow();
    resetBottomRow();
  }

  const moveExpressionToTopRow = () => {
    setTopRow(bottomRow);
  }

  const resetTopRow = () => {
    setTopRow('');
  }
  const resetBottomRow = () => {
    setTopRow('0');
  }

  return (
    <div>
      <Display ref={displayRef} topRow={topRow} bottomRow={bottomRow} onExpressionChange={onExpressionChange}
               onCalculateResult={tryToCalculateResult}/>
      <br/>
      <Keypad onKeypadButtonPress={onKeypadButtonPress} clearExpression={clearExpression}
              clearEntryExpression={clearEntryExpression}/>
    </div>
  );
}
