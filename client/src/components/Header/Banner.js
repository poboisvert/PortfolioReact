import React from "react";
import UncontrolledLottie from "../Lottie/UncontrolledLottie";
import { Container, Text, Logo, Span, Top } from "./styles/Banner";

export default function Banner() {
  return (
    <Container>
      <Logo>
        <UncontrolledLottie />
      </Logo>
      <Text>
        <Top>
          Welcome to my portfolio! I'm PO a Python and REACT JS developer based
          in Montreal, Canada. I shape digital products and create reporting
          tools for business owners.
        </Top>
        <Span>
          This postfolio use REACT JS (Material UI and styled-components) and
          fetch the GitHub data using Axios.
        </Span>
      </Text>
    </Container>
  );
}
