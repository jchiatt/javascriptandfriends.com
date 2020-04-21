import React from "react";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";
import MainBanner from "../components/MainBanner"
import "../components/root.css";

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainBanner />
    </Layout>
  </ThemeProvider>
);

export default Root;
