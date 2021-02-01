import React from "react";
import "./ProjectCard.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NavigationOptions from "../Shared/NavigationOptions";

export default function ProjectCard(props) {
  return (
    <div className="projetcard">
      <div className="projetcard__thumbnail">
        <img src={props.image} alt="" />
      </div>
      <div className="projetcard__title">{props.title}</div>
      <div className="projetcard__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque felis imperdiet proin fermentum leo vel. Diam maecenas sed
          enim ut sem viverra.
        </p>
        <p>
          Praesent elementum facilisis leo vel fringilla est ullamcorper. Neque
          ornare aenean euismod elementum nisi quis eleifend. Congue nisi vitae
          suscipit tellus mauris. Eget lorem dolor sed viverra. Nisi porta lorem
          mollis aliquam ut porttitor leo a. Tincidunt nunc pulvinar sapien et
          ligula ullamcorper malesuada proin. Ac ut consequat semper viverra
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
  );
}
