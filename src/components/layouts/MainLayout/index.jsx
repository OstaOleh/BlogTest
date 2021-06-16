import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
// Components
import Header from '../../templates/Header';
import Seo from '../../templates/Seo/seo';
// Styles
import { GlobalStyle } from '../../../assets/styles/GlobalStyles';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 15px;
`;

const Footer = styled.footer`
  margin-top: 25px;
  padding: 20px 15px;
  background-color: #446961;
  color: #fff;
`;

const MainLayout = ({ children }) => {
  const data = PageQuery();
  return (
    <>
      <Seo title={data.site.siteMetadata?.title || `Title`} />
      <GlobalStyle />

      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </>
  );
};

MainLayout.defaultProps = {};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;

const PageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return data;
};

