import * as React from "react";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSkeleton from "./loading-skeleton";
import ArticleCard from "./article-card";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
    window.scrollTo(0, 0);
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f18f0e0eeee245d98a97fdb0a6378591&pageSize=100`;
    let response = await fetch(apiUrl);
    let json = await response.json();
    if (json.status === "ok") {
      setArticles(json.articles);
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
          ? [1, 2, 3, 4].map((load) => <LoadingSkeleton />)
          : articles.map((article, key) => (
              <ArticleCard article={article} id={`${key + 1}`} />
            ))}
      </Box>
    </Container>
  );
};

export default Home;
