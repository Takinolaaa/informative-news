import { useState, useEffect } from "react";

import { getTopheadlines } from "../apiMethods";
import Article from "./Article";

export default function Articles() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    async function readHeadlines() {
      try {
        const data = await getTopheadlines();
        setHeadlines(data.articles);
      } catch (error) {
        console.log("Error, could not retreive Headlines", error);
      }
    }
    readHeadlines();
  }, []);

  console.log(headlines);
  return (
    <div className="flex flex-col  sm:grid grid-cols-3 w-fit p-2 gap-6 ">
      {headlines?.map((headline) => (
        <Article
          key={headline.url}
          author={headline.author}
          published={
            headline.publishedAt
              ? new Date(headline.publishedAt).toISOString().slice(0, 10)
              : ""
          }
          image={
            headline && headline.urlToImage == null
              ? "src/assets/placeholder.png"
              : headline.urlToImage
          }
          desc={headline.description}
          url={headline.url}
          title={headline.title}
        />
      ))}
    </div>
  );
}
