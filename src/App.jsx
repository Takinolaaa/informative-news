import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Finder from "./Pages/Finder";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/news-search", element: <Finder /> },
];

// Pass basename option here:
const router = createBrowserRouter(routes, {
  basename: "/informative-news",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
