import React from "react";
import { Layout } from "./Layout";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PurchasingAdvice from "./pages/purchasingAdvice/PurchasingAdvice";
import Store from "./pages/store/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";


const Application = styled.div``;
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/purchasingAdvice", element: <PurchasingAdvice /> },
  { path: "/store", element: <Store /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <Application>
      <GlobalStyles />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Application>
  );
}

export default App;
