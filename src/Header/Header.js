import React from "react";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";

import { Container, Leftside, Rightside } from "./styles/Header";

import InputOption from "../Shared/InputOption";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Header() {
  return (
    <Container>
      <Leftside>
        <ArrowDropDownCircleIcon />
        <p>Dark Mode</p>
      </Leftside>
      <Rightside>
        <InputOption Icon={HomeIcon} title="Home" link="/" />
        <InputOption
          Icon={SupervisorAccountIcon}
          title="My GitHub"
          link="https://github.com/poboisvert"
        />
        <InputOption
          Icon={BusinessCenterIcon}
          title="My Linkedin"
          link="https://www.linkedin.com/in/pierre-olivier-boisvert-a83b5796/"
        />
        <InputOption Icon={ChatIcon} title="Daily Slice" link="/" />
        <InputOption Icon={AccountCircleIcon} title="About me" link="/" />
      </Rightside>
    </Container>
  );
}
