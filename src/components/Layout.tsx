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
import "../App.css";

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
