import React from "react";
import { Text, HStack, Button } from "native-base";

export default function BtnRowComp({ first, second, third, fourth }) {
  return (
    <HStack my="1">
      <Button bg={first.color} size="20" mx="1" onPress={() => first.func(first.num)}>
        <Text fontSize="3xl" color="white">
          {first.num}
        </Text>
      </Button>
      <Button bg={second.color} size="20" mx="1" onPress={() => second.func(second.num)}>
        <Text fontSize="3xl" color="white">
          {second.num}
        </Text>
      </Button>
      <Button bg={third.color} size="20" mx="1" onPress={() => third.func(third.num)}>
        <Text fontSize="3xl" color="white">
          {third.num}
        </Text>
      </Button>
      <Button bg={fourth.color} size="20" mx="1" onPress={() => fourth.func(fourth.num)}>
        <Text fontSize="3xl" color="white">
          {fourth.num}
        </Text>
      </Button>
    </HStack>
  );
}
