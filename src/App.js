import React from "react";
import "./App.css";
import Banner from "./Header/Banner";
import Header from "./Header/Header";
import Subcategory from "./Subcategory";
import MenuIcon from "@material-ui/icons/Menu";
import PublicIcon from "@material-ui/icons/Public";
import ConditionalWrapper from "./ConditionalWrapper";
import Footer from "./Footer/Footer";
import ProjectContainer from "./Projects/ProjectContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";

/* https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
https://onepagelove.com/helena-zhang
 */
function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <ConditionalWrapper>
        <Subcategory icon={MenuIcon} title="Reading" />
      </ConditionalWrapper>
      <ArticlesContainer />
      <ConditionalWrapper>
        <Subcategory icon={PublicIcon} title="Projects" />
      </ConditionalWrapper>
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
