import React from "react";
import { Text, HStack, Button } from "native-base";

export default function BtnRowComp(props) {
  return (
    <HStack my="1">
      <Button bg={props.first.color} size="20" mx="1" onPress={() => props.first.func(props.first.num)}>
        <Text fontSize="3xl" color="white">
          {props.first.num}
        </Text>
      </Button>
      <Button bg={props.second.color} size="20" mx="1" onPress={() => props.second.func(props.second.num)}>
        <Text fontSize="3xl" color="white">
          {props.second.num}
        </Text>
      </Button>
      <Button bg={props.third.color} size="20" mx="1" onPress={() => props.third.func(props.third.num)}>
        <Text fontSize="3xl" color="white">
          {props.third.num}
        </Text>
      </Button>
      <Button bg={props.fourth.color} size="20" mx="1" onPress={() => props.fourth.func(props.fourth.num)}>
        <Text fontSize="3xl" color="white">
          {props.fourth.num}
        </Text>
      </Button>
    </HStack>
  );
}
