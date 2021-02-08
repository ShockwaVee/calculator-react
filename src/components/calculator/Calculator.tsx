import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from "react";
import {Display} from "./display/Display";
import {Keypad} from "./keypad/Keypad";
import {isInputAtMinLength, isPressedCharacterEquals} from "../../helpers/DisplayHelper";
import {calculateResult, validateAndNormalizeExpression} from "../../helpers/CalculatorHelper";
import styles from './Calculator.module.scss';

export const Calculator: FunctionComponent = () => {
  const [historyRow, setHistoryRow] = useState<string>('');
  const [inputRow, setInputRow] = useState<string>('0');
  const [isResultActive, setIsResultActive] = useState<boolean>(false);
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const displayRef = useRef<HTMLInputElement>(null);

  const focusInputField = () => {
    if (displayRef.current == null) {
      return;
    }

    if (document.activeElement === displayRef.current) {
      return;
    }

    displayRef.current.focus();
    displayRef.current.selectionStart = displayRef.current.value.length;
    displayRef.current.selectionEnd = displayRef.current.value.length;
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

    const unprocessedExpression = inputRow + String(character);
    const newExpression = validateAndNormalizeExpression({
      newExpression: unprocessedExpression,
      currentExpression: inputRow,
      character,
      isResultActive,
    });

    setIsResultActive(false);
    resetHistoryRow();
    setInputRow(newExpression);
  }

  const tryToCalculateResult = async () => {
    if (isRequestPending) {
      return;
    }
    let result = '';
    setIsRequestPending(true);

    try {
      result = await calculateResult(inputRow)
    } catch (e) {
      showError();
      return;
    } finally {
      setIsRequestPending(false);
    }

    setIsResultActive(true);
    showResultAndMoveExpressionToHistoryRow(result);
  }

  const showResultAndMoveExpressionToHistoryRow = (result: string) => {
    moveExpressionToHistoryRow();
    setInputRow(result);
  }

  const showError = () => {
    setHistoryRow('ERROR');
  }

  const onExpressionChange = (event: ChangeEvent) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const character = (event.nativeEvent as InputEvent).data;
    const newExpression = validateAndNormalizeExpression({
      newExpression: target.value,
      currentExpression: inputRow,
      character,
      isResultActive,
    });

    setIsResultActive(false);
    resetHistoryRow();
    setInputRow(newExpression);
  }

  const clearExpression = () => {
    let newInputRow = inputRow.slice(0, -1);

    setIsResultActive(false);

    if (isInputAtMinLength(newInputRow)) {
      resetInputRow();
      return;
    }

    resetHistoryRow();
    setInputRow(newInputRow);
  }

  const clearEntryExpression = () => {
    resetHistoryRow();
    resetInputRow();
  }

  const moveExpressionToHistoryRow = () => {
    setHistoryRow(inputRow);
  }

  const resetHistoryRow = () => {
    setHistoryRow('');
  }
  const resetInputRow = () => {
    setInputRow('0');
  }

  return (
    <div className={styles.wrapper}>
      <Display ref={displayRef} historyRow={historyRow} inputRow={inputRow} onExpressionChange={onExpressionChange}
               onCalculateResult={tryToCalculateResult}/>
      <Keypad onKeypadButtonPress={onKeypadButtonPress} clearExpression={clearExpression}
              clearEntryExpression={clearEntryExpression}/>
    </div>
  );
}
