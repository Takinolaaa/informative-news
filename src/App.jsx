import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Finder from "./Pages/Finder";
const routes = createBrowserRouter([
  { path: "/informative-news/", element: <Home /> },
  { path: "/informative-news/news", element: <News /> },
  { path: "/informative-news/news-search", element: <Finder /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
