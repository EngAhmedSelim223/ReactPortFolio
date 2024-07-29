import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

import Home from "./components/Home/Home";
import Unknown from "./components/Unknown/Unknown";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "*", element: <Unknown /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
