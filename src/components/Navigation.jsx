import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex  bg-black font-mono text-white p-4 justify-between">
      {" "}
      <Link to="/">Informative news</Link>
      <div className="flex gap-2">
        <Link to="/news">News</Link>
        <Link to="/news-search">Search</Link>
      </div>
    </nav>
  );
}
