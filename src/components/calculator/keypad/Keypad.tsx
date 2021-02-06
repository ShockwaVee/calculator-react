import React, {FunctionComponent} from "react";
import {KeypadProps} from "./interfaces/KeypadProps";
import {Button} from "../button/Button";

export const Keypad: FunctionComponent<KeypadProps> = ({onButtonPress}) => {

  return (
    <div>
    <Button onButtonPress={() => {
      onButtonPress(1)
    }}>
      1
    </Button>
      <Button onButtonPress={() => {
        onButtonPress(2)
      }}>
        2
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(3)
      }}>
        3
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(4)
      }}>
        4
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(5)
      }}>
        5
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(6)
      }}>
        6
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(7)
      }}>
        7
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(8)
      }}>
        8
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(9)
      }}>
        9
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(0)
      }}>
        0
      </Button>
      <Button onButtonPress={() => {
        onButtonPress('/')
      }}>
        /
      </Button>
      <Button onButtonPress={() => {
        onButtonPress('*')
      }}>
        *
      </Button>
      <Button onButtonPress={() => {
        onButtonPress('+')
      }}>
        +
      </Button>
      <Button onButtonPress={() => {
        onButtonPress('-')
      }}>
        -
      </Button>
      <Button onButtonPress={() => {
        onButtonPress('(')
      }}>
        (
      </Button>
      <Button onButtonPress={() => {
        onButtonPress(')')
      }}>
        )
      </Button>
      <Button onButtonPress={() => {
        onButtonPress('=')
      }}>
        =
      </Button>
    </div>
  );
}
