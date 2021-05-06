import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// REACT BROWSE
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
// Module
import Banner from './components/Header/Banner';
import Header from './components/Header/Header';
import Subcategory from './components/Subcategory/Subcategory';
// Material UI
import MenuIcon from '@material-ui/icons/Menu';
import PublicIcon from '@material-ui/icons/Public';
import ChatIcon from '@material-ui/icons/Chat';
import ConditionalWrapper from './ConditionalWrapper';
import Footer from './components/Footer/Footer';
// CARD Container
import ProjectContainer from './components/Projects/ProjectContainer';
import ArticlesContainer from './components/Articles/ArticlesContainer';
// Dark Theme
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/Theme/useDarkMode';
import { GlobalStyles } from './components/Theme/GlobalStyle';
import { lightTheme, darkTheme } from './components/Theme/Theme';
import { selectTheme } from './components/Theme/themeSlice';

import { About } from './components/About/About';
import Jumbotron from './components/Jumbotron/Jumbotron';
// ROUTES
import * as ROUTES from './constants/routes';

/* https://blog.hackages.io/
 */
export default function App() {
  const theme = useSelector(selectTheme);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Switch>
            <div className='app'>
              <Header />
              <Banner />
              <Route
                exact
                path={ROUTES.HOME}
                render={() => (
                  <React.Fragment>
                    <ConditionalWrapper>
                      <Subcategory icon={MenuIcon} title='Reading' />
                    </ConditionalWrapper>
                    <ArticlesContainer />
                    <ConditionalWrapper>
                      <Subcategory icon={ChatIcon} title='Active projects' />
                    </ConditionalWrapper>
                    <Jumbotron />
                    <ConditionalWrapper>
                      <Subcategory icon={PublicIcon} title='Projects' />
                    </ConditionalWrapper>
                    <ProjectContainer />
                  </React.Fragment>
                )}
              />
              <Route exact path={ROUTES.ABOUT} component={About} />

              <Footer />
            </div>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}
