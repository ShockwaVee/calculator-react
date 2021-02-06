import React, {FunctionComponent} from "react";
import {KeypadProps} from "./interfaces/KeypadProps";
import {Button} from "../button/Button";
import styles from './Keypad.module.scss'

export const Keypad: FunctionComponent<KeypadProps> = ({
                                                         onKeypadButtonPress,
                                                         clearExpression,
                                                         clearEntryExpression
                                                       }) => {

  return (
    <div className={styles.wrapper}>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress('(')
      }}>
        (
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(')')
      }}>
        )
      </Button>
      <Button isRed onKeypadButtonPress={() => {
        clearExpression()
      }}>
        C
      </Button>
      <Button isRed onKeypadButtonPress={() => {
        clearEntryExpression()
      }}>
        CE
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(1)
      }}>
        1
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(2)
      }}>
        2
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(3)
      }}>
        3
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress('*')
      }}>
        *
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(4)
      }}>
        4
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(5)
      }}>
        5
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(6)
      }}>
        6
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress('-')
      }}>
        -
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(7)
      }}>
        7
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(8)
      }}>
        8
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(9)
      }}>
        9
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress('+')
      }}>
        +
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress('.')
      }}>
        .
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress(0)
      }}>
        0
      </Button>
      <Button isGreen onKeypadButtonPress={() => {
        onKeypadButtonPress('=')
      }}>
        =
      </Button>
      <Button onKeypadButtonPress={() => {
        onKeypadButtonPress('/')
      }}>
        /
      </Button>
    </div>
  );
}
