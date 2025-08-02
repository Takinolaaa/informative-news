import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Finder from "./Pages/Finder";
const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/news-search", element: <Finder /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
