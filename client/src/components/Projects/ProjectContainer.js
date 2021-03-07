import React from "react";
import GithubAPI from "../API/GithubAPI";
import { Container } from "./styles/Project";

export default function ProjectContainer() {
  return (
    <Container>
      <GithubAPI />
    </Container>
  );
}
