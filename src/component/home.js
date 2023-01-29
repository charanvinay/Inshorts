import * as React from "react";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSkeleton from "./loading-skeleton";
import ArticleCard from "./article-card";

const api_key = "pub_16216823822d95023191a4369b9f35bceecbf";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    let apiUrl = `https://newsdata.io/api/1/news?apikey=${api_key}&country=in`;
    let response = await fetch(apiUrl);
    let json = await response.json();
    if (json.status === "success") {
      setArticles(json.results);
    } else {
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {loading
          ? [1, 2, 3, 4].map((load, key) => (
              <div key={key}>
                <LoadingSkeleton />
              </div>
            ))
          : articles.map((article, key) => (
              <ArticleCard article={article} key={key} id={`${key + 1}`} />
            ))}
      </Box>
    </Container>
  );
};

export default Home;
