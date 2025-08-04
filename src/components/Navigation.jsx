export default function Navbar() {
  return (
    <nav className="flex  bg-black font-mono text-white p-4 justify-between">
      {" "}
      <a className="text-white text-bold font-mono " href="/informative-news/">
        Informative News
      </a>{" "}
      <div className="flex gap-2">
        <a href="/informative-news/news">Trending News</a>
        <a href="/informative-news/news-search">Find Articles</a>
      </div>
    </nav>
  );
}
