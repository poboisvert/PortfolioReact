import React from "react";
import axios from "axios";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NavigationOptions from "../Shared/NavigationOptions";
import {
  Card,
  Title,
  Body,
  Thumbnail,
  Image,
  Navigation,
} from "./styles/FetchCard";

export default class FetchArticle extends React.Component {
  state = {
    rev_projects: [],
  };

  /*   componentDidMount() {
    axios.get(`https://api.github.com/users/poboisvert`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  } */
  compareBy(key, ascending) {
    let reverse = ascending ? 1 : -1;
    return function (a, b) {
      if (a[key] < b[key]) return -1 * reverse;
      if (a[key] > b[key]) return 1 * reverse;
      return 0;
    };
  }
  async componentDidMount() {
    try {
      axios
        .get(`https://api.github.com/users/poboisvert/repos?per_page=50`)
        .then((res) => {
          let rev_projects = res.data;
          rev_projects.sort(this.compareBy("id"));
          this.setState({ rev_projects });
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        {!this.state.rev_projects ? (
          "Please review the data structure for the variable data"
        ) : (
          <>
            {this.state.rev_projects.slice(0, 6).map((project, i) => (
              <Card id={i}>
                <Thumbnail>
                  {!project.homepage ? (
                    <Image src="banner.png" alt="" />
                  ) : (
                    <Image src={project.homepage} alt="" />
                  )}
                </Thumbnail>
                <Title>
                  {project.name} |{" "}
                  {new Date(project.created_at).toLocaleDateString()}
                </Title>
                <Body>
                  <p>{project.description}</p>
                  <Navigation>
                    <NavigationOptions
                      Icon={ArrowRightIcon}
                      title="Source Code"
                      color="#5c3cfc"
                      link={project.html_url}
                    />
                  </Navigation>
                </Body>
              </Card>
            ))}
          </>
        )}
      </>
    );
  }
}
