import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../Theme/themeSlice";
import { Container, Block, Text, Image } from "./styles/About";
import { lightTheme, darkTheme } from "../Theme/Theme";

export const About = () => {
  const theme = useSelector(selectTheme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  console.log(themeMode);

  return (
    <Container>
      <Block key="1" background="" direction="row">
        <Image src="icon1.jpg" />
        <Text>
          Completed a Bootcamp at University Of Toronto and I am able to use
          ReactJs, PostgreSQL (MySQL), Python, HTML5, and CSS. Strong
          collaboration skills and proven history of application development.
        </Text>
      </Block>

      <Block key="2" background={themeMode.sub} direction="row-reverse">
        <Image src="icon2.jpg" />
        <Text>
          Completed a MBA and loves to transform ideas into reality using code.
          I am passionate about using Javascript and Python to create user
          experiences.
        </Text>
      </Block>
      <Block key="3" background="" direction="row">
        <Image src="icon3.jpg" />
        <Text>
          Started in 2020 developing web applications using the latest front-end
          and back-end technologies.
        </Text>
      </Block>
    </Container>
  );
};
