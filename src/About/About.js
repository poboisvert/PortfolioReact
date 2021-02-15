import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/themeSlice";
import { Container, Text } from "./styles/About";

export const About = () => {
  const theme = useSelector(selectTheme);

  return (
    <div>
      <Container>
        <Text>
          Completed a Bootcamp at University Of Toronto and I am able to use
          ReactJs, PostgreSQL, Python, HTML5, and CSS. Strong collaboration
          skills and proven history of application development. Wordpress and
          MySQL.
        </Text>
      </Container>
      <Container>
        <Text>
          Completed a MBA and loves to transform ideas into reality using code.
          I am passionate about using Javascript and Python to create user
          experiences.
        </Text>
      </Container>
      <Container>
        <Text>
          With over two years of experience developing web applications using
          the latest front-end and back-end technologies.
        </Text>
      </Container>
    </div>
  );
};
