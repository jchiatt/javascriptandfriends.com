import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyLink as Link } from "./Link";

import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import "./default.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../themes";

import { Nav, NavItem } from "./Nav";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.mainBackground || "#FAB"};
  }

  :focus {
    outline: 3px dashed ${props => props.theme.colors.highlight};
  }
`;

const Main = styled.main``;

const Layout = ({ children, hideHeading = false }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>MagnoliaJS Conference — Mississippi's Only Developer Conference</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} Link={Link} />
            <Main>{children}</Main>
            <Footer>
            <Nav>
              <NavItem>
                <a href="https://2020.magnoliajs.com">2020</a>
              </NavItem>
              <NavItem>
                <a href="https://2019.magnoliajs.com">2019</a>
              </NavItem>
              <NavItem>
                <Link to="codeofconduct">Code of Conduct</Link>
              </NavItem>
            </Nav>
              &copy; 2020 Magnolia Events LLC
            </Footer>
          </>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
