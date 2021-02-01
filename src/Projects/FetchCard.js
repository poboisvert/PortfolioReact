import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NavigationOptions from "../Shared/NavigationOptions";
import "./ProjectCard.css";

const data = {
  content: {
    body: [
      {
        title: "Brain Bar",
        image:
          "https://preview.redd.it/rtth99ngv4261.png?width=3840&format=png&auto=webp&s=187103053e2c4ba2ef33e3f91e0ca1f8a938da21",
        islast: null,
        div: "projetcard__thumbnail",
      },
      {
        title: "Story Book",
        image: "https://miro.medium.com/max/1200/1*I1bJuD1D5G2FvWP5IVyyFQ.png",
        islast: null,
        div: "projetcard__thumbnail",
      },
      {
        title: "Northrop Chat Bot",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzlPBiPy1Cb78YkHdO89BTrGT3HTytNSpUw&usqp=CAU",
        islast: null,
        div: "projetcard__thumbnail large",
      },
      {
        title: "Favorite Store",
        image: "https://i.ytimg.com/vi/pO9-WlU7B-c/maxresdefault.jpg",
        islast: "last",
        div: "projetcard__thumbnail",
      },
      {
        title: "Mission Avocado",
        image:
          "https://cms-assets.tutsplus.com/uploads/users/178/posts/21027/preview_image/thumbnail.jpg",
        islast: "last",
        div: "projetcard__thumbnail",
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
              <div className="projetcard">
                <div className={block.div}>
                  <img src={block.image} alt="" />
                </div>
                <div className="projetcard__title">{block.title}</div>
                <div className="projetcard__description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque felis imperdiet proin fermentum leo vel.
                    Diam maecenas sed enim ut sem viverra.
                  </p>
                  <p>
                    Praesent elementum facilisis leo vel fringilla est
                    ullamcorper. Neque ornare aenean euismod elementum nisi quis
                    eleifend. Congue nisi vitae suscipit tellus mauris. Eget
                    lorem dolor sed viverra. Nisi porta lorem mollis aliquam ut
                    porttitor leo a. Tincidunt nunc pulvinar sapien et ligula
                    ullamcorper malesuada proin. Ac ut consequat semper viverra
                    nam. Fusce id velit ut tortor pretium.
                  </p>
                  <div className="projetcard__icon">
                    <NavigationOptions
                      Icon={ArrowRightIcon}
                      title="See Live"
                      color="gray"
                    />
                    <NavigationOptions
                      Icon={ArrowRightIcon}
                      title="Source Code"
                      color="#4201ff"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}
