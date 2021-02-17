import React from "react";
import FetchArticle from "./FetchArticle";
import { Container } from "./styles/Articles";

export default function ArticlesContainer() {
  return (
    <Container>
      <FetchArticle />
    </Container>
  );
}
