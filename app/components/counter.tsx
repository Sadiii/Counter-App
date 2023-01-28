"use client";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Button,
  ButtonGroup,
  Text,
  Image
} from "@chakra-ui/react";
export default function CounterApp() {
  let [val, setVal] = useState(0);

  function clickHandler(newVal: number, op: string) {
    op == "+" ? setVal(val + newVal) : setVal(val - newVal);
  }
  return (
    <>
      <Card align="center" >
      <Image
      src='./image.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="200
      "
      />
        <CardHeader>
          <Heading size="md">Counter</Heading>
        </CardHeader>
        <CardBody>
          <ButtonGroup spacing="2">
            <Button
              size="sm"
              variant="solid"
              colorScheme="facebook"
              onClick={() => clickHandler(1, "+")}
            >
              +
            </Button>
            <Button
             size="sm"
              variant="outline"
              colorScheme="facebook"
              onClick={() => clickHandler(2, "+")}
            >
              + 2
            </Button>
            <Button
              size="sm"
              variant="outline"
              colorScheme="facebook"
              onClick={() => clickHandler(3, "+")}
            >
              + 3
            </Button>
          </ButtonGroup>
          <Text padding="5" align = "center">{val}</Text>
          <ButtonGroup spacing="2">
            <Button
             size="sm"
              variant="solid"
              colorScheme="facebook"
              onClick={() => clickHandler(1, "-")}
            >
              -
            </Button>
            <Button
              size="sm"
              variant="outline"
              colorScheme="facebook"
              onClick={() => clickHandler(2, "-")}
            >
              - 2
            </Button>
            <Button
              size="sm"
              variant="outline"
              colorScheme="facebook"
              onClick={() => clickHandler(3, "-")}
            >
              - 3
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </>
  );
}
