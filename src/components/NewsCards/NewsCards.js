import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import "./NewsCards.css";

const infoCards = [
  {
    title: "Latest News",
    text: "Give me the latest news",
  },
  
  {
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Narendra Modi...",
    text: "What's up with PlayStation 5",
  },
  {
    title: "News by Sources",
    info: "CNN, Wired, Zee News, Time, IGN, Buzzfeed, AAJTAK...",
    text: "Give me the news from CNN",
  },
  {
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest technology news",
  },
 
  

];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <Grow in>
        <Grid className="container" container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className="infocard"> 
            {/* xs (phones), sm (tablets), md (desktops), and lg (larger desktops). */}
              <div className="helpCard">
                <Typography className="title" variant="h6">
                  <strong>{infoCard.title}</strong>
                </Typography>
                {infoCard.info ? (
                  <Typography variant="body1">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="body1">
                  <strong>Try saying: </strong>
                  <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard activeArticle={activeArticle} article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
