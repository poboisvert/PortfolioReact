import React from "react";
import axios from "axios";
import { Container, Inner, Pane, Title, SubTitle, Image } from "./styles/api";

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
        {!this.state.rev_projects ? (
          "Please review the data structure for the variable data"
        ) : (
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
        )}
      </>
    );
  }
}
