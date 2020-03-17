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
          <title>MagnoliaJS Conference - April 15-17, 2020</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} Link={Link}>
              <Nav>
                {/* <NavItem>
                  <Link to="speakers">🗣️ Speakers</Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link to="workshops">🛠️ Workshops</Link>
                </NavItem> */}
                <NavItem>
                  <Link to="info">💡 Helpful Info</Link>
                </NavItem>
                <NavItem>
                  <Link to="thankyou">❤️ Thank You's</Link>
                </NavItem>
              </Nav>
            </Header>
            <Main>{children}</Main>
            <Footer>
            <Nav>
              <NavItem>
                <Link to="codeofconduct">📝 Code of Conduct</Link>
              </NavItem>
            </Nav>
              &copy; 2019 Magnolia Events LLC
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
