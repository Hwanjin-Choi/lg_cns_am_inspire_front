import { useParams } from "react-router";
import NewsList from "./NewsList";
import { useEffect, useState } from "react";

const NewsPage = () => {
  console.log(useParams());
  const param = useParams();
  const [articles, setArticles] = useState([]);
  const path = param["*"] || "all";
  console.log(path);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5baf7d9f3f42879a20d7d19d9886e4";
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
    };
    fetchData();
  }, []);
  return (
    <>
      <NewsList />
    </>
  );
};

export default NewsPage;
