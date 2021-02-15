import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/themeSlice";

import "./App.css";
// Module
import Banner from "./Header/Banner";
import Header from "./Header/Header";
import Subcategory from "./Subcategory/Subcategory";
import MenuIcon from "@material-ui/icons/Menu";
import PublicIcon from "@material-ui/icons/Public";
import ConditionalWrapper from "./ConditionalWrapper";
import Footer from "./Footer/Footer";
import ProjectContainer from "./Projects/ProjectContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";
// Dark Theme
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Theme";

import { About } from "./About/About";

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
