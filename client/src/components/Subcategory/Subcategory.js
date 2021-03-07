import React from "react";
import { Container, Text } from "./styles/Subcategory";

export default function Subcategory(props) {
  return (
    <Container>
      <props.icon /> <Text>{props.title}</Text>
    </Container>
  );
}
