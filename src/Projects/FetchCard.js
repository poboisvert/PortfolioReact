import React from "react";
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

const data = {
  content: {
    body: [
      {
        title: "microservice_flask",
        image:
          "https://www.freecodecamp.org/news/content/images/2020/12/pythonmicroservices.png",
        islast: null,
        div: "projetcard__thumbnail",
        url: "https://github.com/poboisvert/microservice_flask",
        description:
          "[REACT/Python] This project uses Python, Flask, Flask-RESTful, Flask-SQLAlchemy for a microservice (POST, GET, PUT and DEL) on PORT 5000 and a React Redux (payload) Frontend on PORT 3000.",
      },
      {
        title: "portfolio_reacts",
        image:
          "https://github.com/poboisvert/portfolio_react/raw/main/preview.png",
        islast: null,
        div: "projetcard__thumbnail",
        url: "https://github.com/poboisvert/portfolio_react",
        description:
          "[REACT] This project is ongoing since this is my personal portfolio of my recents projects. In 2021, the portfolio is based on REACT with a JSON to display the projects.",
      },
      {
        title: "World_Weather_Analysis",
        image:
          "https://www.aerisweather.com/blog/wp-content/uploads/2019/03/tempmap2.png",
        islast: null,
        div: "projetcard__thumbnail large",
        url: "https://github.com/poboisvert/World_Weather_Analysis",
        description:
          "[Python] This project use two APIs and provide real-time suggestions for booking hotels that were (1) within a given range of latitude and longitude and that (2) provided the right kind of weather for the client.",
      },
    ],
  },
};

export default class FetchArticle extends React.Component {
  render() {
    return (
      <>
        {!data.content.body ? (
          "Please review the data structure for the variable data"
        ) : (
          <>
            {data.content.body.map((block) => (
              <Card>
                <Thumbnail>
                  <Image src={block.image} alt="" />
                </Thumbnail>
                <Title>{block.title}</Title>
                <Body>
                  <p>{block.description}</p>
                  <Navigation>
                    <NavigationOptions
                      Icon={ArrowRightIcon}
                      title="Source Code"
                      color="#4201ff"
                      link={block.url}
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
