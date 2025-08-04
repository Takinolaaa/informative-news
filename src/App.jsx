import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Finder from "./Pages/Finder";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-search" element={<Finder />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
