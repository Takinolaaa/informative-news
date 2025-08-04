import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Finder from "./Pages/Finder";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/news-search", element: <Finder /> },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  );
}

export default App;
