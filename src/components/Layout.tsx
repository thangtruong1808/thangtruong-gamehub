import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import {
  Grid,
  GridItem,
  Show,
  Container,
  VStack,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import "../App.css";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";

import { Genre } from "../hooks/useGenres";
import DrawerExample from "./DrawerExample";
import Footer from "./Footer";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";
import Homepage from "./Home";
import Reviewpage from "./Review";
import NewReleasespage from "./NewReleases";
import AllGamespage from "./AllGames";
import Browsespage from "./Browse";
import React from "react";
import MyNavBar from "./MyNavBar";

const Layout = () => {
  return (
    <>
      <MyNavBar />

      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
