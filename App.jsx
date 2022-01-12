import React, { useState } from "react";
import { Text, Center, NativeBaseProvider, Box, StatusBar } from "native-base";

import BtnRowComp from "./components/BtnRowComp";

export default function App() {
  const [display, setDisplay] = useState(0);
  // console.log(typeof display);
  if (display === "") {
    setDisplay(0);
  }

  const pressNum = (num) => {
    if (display === 0) {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };
  const destroyNum = () => {
    setDisplay(0);
  };
  const calculation = () => {
    const amount = eval(display);
    setDisplay(amount);
  };
  const rank = () => {
    calculation();
    setDisplay(String(Math.pow(display, 2)));
  };
  const pi = () => {
    if (display === 0) {
      setDisplay(3.14);
    } else {
      setDisplay(display + "*3.14");
    }
  };
  const eraseNum = () => {
    if (display !== 0) {
      const arr = display.split("");
      arr.pop();
      setDisplay(arr.join(""));
    }
  };
  const percentage = () => {
    if (display === 0) {
      setDisplay(0);
    } else {
      setDisplay(display + "/100");
    }
  };

  const ordinaryBtnColor = "primary.500";
  const specialBtnColor = "secondary.500";
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Center flex="1" bg="#164e63">
        <Box justifyContent="flex-end" alignItems="flex-end" px={3} py={1} bg="#ecfeff" height="150" width="340" rounded="xl" mb={5}>
          <Text textAlign="right" fontSize="50" color="black">
            {display}
          </Text>
        </Box>
        <BtnRowComp
          first={{ num: "C", color: specialBtnColor, func: destroyNum }}
          second={{ num: "π", color: specialBtnColor, func: pi }}
          third={{ num: "x²", color: specialBtnColor, func: rank }}
          fourth={{ num: "<---", color: specialBtnColor, func: eraseNum }}
        />
        <BtnRowComp
          first={{ num: "1", color: ordinaryBtnColor, func: pressNum }}
          second={{ num: "2", color: ordinaryBtnColor, func: pressNum }}
          third={{ num: "3", color: ordinaryBtnColor, func: pressNum }}
          fourth={{ num: "+", color: specialBtnColor, func: pressNum }}
        />
        <BtnRowComp
          first={{ num: "4", color: ordinaryBtnColor, func: pressNum }}
          second={{ num: "5", color: ordinaryBtnColor, func: pressNum }}
          third={{ num: "6", color: ordinaryBtnColor, func: pressNum }}
          fourth={{ num: "-", color: specialBtnColor, func: pressNum }}
        />
        <BtnRowComp
          first={{ num: "7", color: ordinaryBtnColor, func: pressNum }}
          second={{ num: "8", color: ordinaryBtnColor, func: pressNum }}
          third={{ num: "9", color: ordinaryBtnColor, func: pressNum }}
          fourth={{ num: "*", color: specialBtnColor, func: pressNum }}
        />
        <BtnRowComp
          first={{ num: "=", color: specialBtnColor, func: calculation }}
          second={{ num: "0", color: ordinaryBtnColor, func: pressNum }}
          third={{ num: "%", color: specialBtnColor, func: percentage }}
          fourth={{ num: "/", color: specialBtnColor, func: pressNum }}
        />
      </Center>
    </NativeBaseProvider>
  );
}
