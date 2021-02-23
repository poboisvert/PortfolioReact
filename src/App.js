import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "./components/Theme/themeSlice";

import "./App.css";
// Module
import Banner from "./components/Header/Banner";
import Header from "./components/Header/Header";
import Subcategory from "./components/Subcategory/Subcategory";
import MenuIcon from "@material-ui/icons/Menu";
import PublicIcon from "@material-ui/icons/Public";
import ChatIcon from "@material-ui/icons/Chat";
import ConditionalWrapper from "./ConditionalWrapper";
import Footer from "./components/Footer/Footer";
import ProjectContainer from "./components/Projects/ProjectContainer";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
// Dark Theme
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/Theme/useDarkMode";
import { GlobalStyles } from "./components/Theme/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Theme/Theme";

import { About } from "./components/About/About";
import Jumbotron from "./components/Jumbotron/Jumbotron";

/* https://blog.hackages.io/
 */
function App() {
  const theme = useSelector(selectTheme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Switch>
            <div className="app">
              <Header />
              <Banner />
              <Route
                exact
                path="/"
                render={() => (
                  <React.Fragment>
                    <ConditionalWrapper>
                      <Subcategory icon={MenuIcon} title="Reading" />
                    </ConditionalWrapper>
                    <ArticlesContainer />
                    <ConditionalWrapper>
                      <Subcategory icon={ChatIcon} title="Active projects" />
                    </ConditionalWrapper>
                    <Jumbotron />
                    <ConditionalWrapper>
                      <Subcategory icon={PublicIcon} title="Projects" />
                    </ConditionalWrapper>
                    <ProjectContainer />
                  </React.Fragment>
                )}
              />
              <Route exact path="/about" component={About} />

              <Footer />
            </div>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
