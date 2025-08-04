import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Finder from "./Pages/Finder";

function App() {
  return (
    <Router basename="/informative-news">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-search" element={<Finder />} />
      </Routes>
    </Router>
  );
}

export default App;
