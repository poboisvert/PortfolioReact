import React from "react";
import axios from "axios";
import { Container, Inner, Pane, Title, SubTitle, Image } from "./styles/api";
import {
  Card,
  TitleCard,
  Body,
  Thumbnail,
  ImageCard,
  Navigation,
} from "../Projects/styles/FetchCard";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NavigationOptions from "../Shared/NavigationOptions";

export default class GithubAPI extends React.Component {
  state = {
    rev_projects: [],
  };

  compareBy(key, ascending) {
    let reverse = ascending ? 1 : -1;
    return function (a, b) {
      if (a[key] < b[key]) return -1 * reverse;
      if (a[key] > b[key]) return 1 * reverse;
      return 0;
    };
  }
  componentDidMount() {
    try {
      axios.get(`https://api.github.com/users/poboisvert/repos`).then((res) => {
        let rev_projects = res.data;
        rev_projects.sort(this.compareBy("id"));
        this.setState({ rev_projects });
        console.log(rev_projects);
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        {this.props.type === "jumbotron" ? (
          <>
            <Inner direction="row">
              {this.state.rev_projects
                .filter(
                  (array) =>
                    array.name === "market_flask" ||
                    array.name === "portfolio_react"
                )
                .map((project, i) => (
                  <>
                    <Container key={i}>
                      <Pane>
                        <Title>{project.name}</Title>
                        <SubTitle>{project.description}</SubTitle>
                      </Pane>
                      <Pane>
                        <Image src={project.homepage} />
                      </Pane>
                    </Container>
                  </>
                ))}
            </Inner>
          </>
        ) : (
          <>
            {this.state.rev_projects.slice(0, 6).map((project, i) => (
              <Card id={i}>
                <Thumbnail>
                  {!project.homepage ? (
                    <ImageCard src="banner.png" alt="" />
                  ) : (
                    <ImageCard src={project.homepage} alt="" />
                  )}
                </Thumbnail>
                <TitleCard>
                  {project.name} |{" "}
                  {new Date(project.created_at).toLocaleDateString()}
                </TitleCard>
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
