import React from "react";
import "./Articles.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NavigationOptions from "../Shared/NavigationOptions";
import {
  Article,
  Preview,
  Title,
  Image,
  Text,
  Last,
} from "./styles/FetchArticle";

const data = {
  content: {
    body: [
      {
        image: "https://miro.medium.com/max/1400/0*_xkpeA_oDwNH88Lc",
        title: "Simple Git commands",
        description:
          "As a developer you probably need Git on a daily basis. There are lots of articles about basic Git command...",
        link:
          "https://levelup.gitconnected.com/using-git-commands-that-will-make-you-look-like-a-senior-developer-14247f4aca3b",
        islast: null,
        date: "Oct 5, 2020",
      },
      {
        image: "https://miro.medium.com/max/1400/1*fSVqwZGBw4_vMfAExprT2g.png",
        title: "Grokking Algorithms — Book Review",
        description:
          "Hello guys, I have read many books on data structures and algorithms like Introduction to Algorithms by Thomas...",
        link:
          "https://medium.com/hackernoon/grokking-algorithms-book-review-aa4459da93f5",
        islast: "last",
        date: "Jun 3, 2019",
      },
      {
        image:
          "https://cdn-images-1.medium.com/fit/t/1600/480/1*1380x8iqFlXB8-e_R7KXVw.png",
        title: "Create a simple payment flow with Stripe",
        description:
          "Learn how to easily set up a payment flow on your web application using a ReactJs...",
        link:
          "https://blog.hackages.io/create-a-simple-payment-flow-with-stripe-b1d0f0f94337",
        islast: null,
        date: "May 15, 2019",
      },
      {
        image:
          "https://hbr.org/resources/images/article_assets/2017/02/feb17-06-682304915.jpg",
        title:
          "Emotional Intelligence Has 12 Elements. Which Do You Need to Work On?",
        description:
          "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        link:
          "https://hbr.org/2017/02/emotional-intelligence-has-12-elements-which-do-you-need-to-work-on?utm_medium=social&utm_campaign=hbr&utm_source=linkedin&tpcc=orgsocial_edit",
        islast: "last",
        date: "February 06, 2017",
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
              <>
                {block.islast ? (
                  <Last>
                    <Preview>
                      <Image src={block.image} alt="thumbnail" />
                    </Preview>
                    <Text>{block.date}</Text>
                    <Title>{block.title}</Title>
                    <p>{block.description}</p>
                    <NavigationOptions
                      Icon={ArrowRightIcon}
                      title="Read More"
                      color="#4201ff"
                      link={block.link}
                    />
                  </Last>
                ) : (
                  <Article>
                    <Preview>
                      <Image src={block.image} alt="thumbnail" />
                    </Preview>
                    <Text>{block.date}</Text>
                    <Title>{block.title}</Title>
                    <p>{block.description}</p>
                    <NavigationOptions
                      Icon={ArrowRightIcon}
                      title="Read More"
                      color="#4201ff"
                      link={block.link}
                    />
                  </Article>
                )}
              </>
            ))}
          </>
        )}
      </>
    );
  }
}
