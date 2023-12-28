import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import ErrorPage from "./components/NoPage";
import "./index.css";
import Layout from "./components/Layout";
import Homepage from "./components/Home";
import Review from "./components/Review";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewReleases from "./components/NewReleases";
import Top from "./components/Top";
import AllGames from "./components/AllGames";
import Browse from "./components/Browse";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/reviews",
        element: <Review />,
      },
      {
        path: "/new_releases",
        element: <NewReleases />,
      },
      {
        path: "/top",
        element: <Top />,
      },
      {
        path: "/allgames",
        element: <AllGames />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
