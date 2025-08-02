import Navbar from "../components/Navigation";
import { useState, useEffect } from "react";
import { fetchNews } from "../apiMethods";
import Article from "../components/Article";
import Footer from "../components/Footer";

export default function Finder() {
  const [selected, setSelected] = useState("random");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(selected);
        setArticles(data.articles);
      } catch (error) {
        console.log("error fetching articles", error);
      }
    };
    getNews();
  }, [selected]);

  return (
    <>
      <Navbar />

      <div className=" flex flex-col  p-4">
        <h1 className="text-center">Explore articles</h1>
        <div className="p-4 h-fit  w-fit gap-1 ml-30 sm:ml-1 md:ml-1  2xl:ml-36">
          <select
            onChange={(e) => setSelected(e.target.value)}
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 h-10 focus:border-blue-500 block w-40 p-2.5 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          >
            <option selected value="random">
              {" "}
              Select Option
            </option>
            <option value="politics"> Politics</option>
            <option value="finance"> Finance</option>
            <option value="health">Health</option>
            <option value="technology"> Technology</option>
            <option value="geopolitics">Geopolitics</option>
          </select>
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="flex flex-col sm:grid grid-cols-3 w-fit p-2 gap-2 justify-center">
          {articles?.map((headline) => (
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
      </div>
      <Footer />
    </>
  );
}
