export default function Navbar() {
  return (
    <nav className="flex  bg-black font-mono text-white p-4 justify-between">
      {" "}
      <a className="text-white text-bold font-mono " href="/">
        Informative News
      </a>{" "}
      <div className="flex gap-2">
        <a href="/news">Trending News</a>
        <a href="/news-search">Find Articles</a>
      </div>
    </nav>
  );
}
