import React, { useState } from "react";
import { Text, Center, NativeBaseProvider, Box, StatusBar } from "native-base";

import BtnRowComp from "./components/BtnRowComp";

export default function App() {
  const [display, setDisplay] = useState(0);
  // console.log(typeof display);
  if (display === "" || display === "0" || display === "+" || display === "/" || display === "*") {
    setDisplay(0);
  }

  function checkOperator(tested) {
    switch (tested) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
      case "x²":
      case "π":
        return true;
      default:
        return false;
    }
  }

  //handling key
  const pressKey = (key) => {
    const arr = String(display).split("");

    let isKeyOperator = checkOperator(key);
    let isLastIndexOperator = checkOperator(arr[arr.length - 1]);

    if (display === 0 || display == Infinity) {
      setDisplay(key);
    } else if (isLastIndexOperator && isKeyOperator) {
      arr[arr.length - 1] = key;
      setDisplay(arr.join(""));
    } else {
      setDisplay(display + key);
    }
  };

  //pi operation
  const pi = (key) => {
    const arr = String(display).split("");

    let isKeyOperator = checkOperator(key);
    let isLastIndexOperator = checkOperator(arr[arr.length - 1]);

    if (display === 0 || display == Infinity) {
      setDisplay(3.14);
    } else if (isLastIndexOperator && isKeyOperator) {
      arr[arr.length - 1] = "*3.14";
      setDisplay(arr.join(""));
    } else {
      setDisplay(display + "*3.14");
    }
  };

  //percentage operation
  const percentage = (key) => {
    const arr = String(display).split("");

    let isKeyOperator = checkOperator(key);
    let isLastIndexOperator = checkOperator(arr[arr.length - 1]);

    if (display === 0 || display == Infinity) {
      setDisplay(0);
    } else if (isLastIndexOperator && isKeyOperator) {
      arr[arr.length - 1] = "/100";
      setDisplay(arr.join(""));
    } else {
      setDisplay(display + "/100");
    }
  };

  //rank operation
  const rank = (key) => {
    const arr = String(display).split("");

    let isKeyOperator = checkOperator(key);
    let isLastIndexOperator = checkOperator(arr[arr.length - 1]);

    if (isLastIndexOperator && isKeyOperator) {
      arr[arr.length - 1] = "";
      return setDisplay(arr.join(""));
    }
    const amount = eval(display);
    const result = Math.pow(amount, 2);
    setDisplay(String(result));
  };

  //C key
  const destroyNum = () => {
    setDisplay(0);
  };

  //backspace key
  const eraseNum = () => {
    if (display == Infinity) {
      setDisplay(0);
    } else if (display !== 0) {
      const arr = display.split("");
      console.log(arr);
      arr.pop();
      setDisplay(arr.join(""));
    }
  };

  // equal key
  const calculation = () => {
    const arr = String(display).split("");
    let isLastIndexOperator = checkOperator(arr[arr.length - 1]);

    if (isLastIndexOperator) {
      return display;
    }
    const amount = eval(display);
    setDisplay(String(amount));
  };

  const ordinaryBtnColor = "primary.500";
  const specialBtnColor = "secondary.500";
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Center flex="1" bg="#164e63">
        <Box justifyContent="flex-end" alignItems="flex-end" px={3} py={1} bg="#ecfeff" height="150" width="340" rounded="xl" mb={5}>
          <Text textAlign="right" fontSize="40" color="black">
            {display}
          </Text>
        </Box>
        <BtnRowComp
          first={{ num: "C", color: specialBtnColor, func: destroyNum }}
          second={{ num: "π", color: specialBtnColor, func: pi }}
          third={{ num: "x²", color: specialBtnColor, func: rank }}
          fourth={{ num: "⌫", color: specialBtnColor, func: eraseNum }}
        />
        <BtnRowComp
          first={{ num: "1", color: ordinaryBtnColor, func: pressKey }}
          second={{ num: "2", color: ordinaryBtnColor, func: pressKey }}
          third={{ num: "3", color: ordinaryBtnColor, func: pressKey }}
          fourth={{ num: "+", color: specialBtnColor, func: pressKey }}
        />
        <BtnRowComp
          first={{ num: "4", color: ordinaryBtnColor, func: pressKey }}
          second={{ num: "5", color: ordinaryBtnColor, func: pressKey }}
          third={{ num: "6", color: ordinaryBtnColor, func: pressKey }}
          fourth={{ num: "-", color: specialBtnColor, func: pressKey }}
        />
        <BtnRowComp
          first={{ num: "7", color: ordinaryBtnColor, func: pressKey }}
          second={{ num: "8", color: ordinaryBtnColor, func: pressKey }}
          third={{ num: "9", color: ordinaryBtnColor, func: pressKey }}
          fourth={{ num: "*", color: specialBtnColor, func: pressKey }}
        />
        <BtnRowComp
          first={{ num: "=", color: specialBtnColor, func: calculation }}
          second={{ num: "0", color: ordinaryBtnColor, func: pressKey }}
          third={{ num: "%", color: specialBtnColor, func: percentage }}
          fourth={{ num: "/", color: specialBtnColor, func: pressKey }}
        />
      </Center>
    </NativeBaseProvider>
  );
}
