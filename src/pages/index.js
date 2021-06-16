import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Layout
import MainLayout from "../components/layouts/MainLayout";
import IndexPageTemplate from '../components/templates/IndexPage';

const IndexPage = () => {
  const data = IndexQuery();

  return (
    <MainLayout>
      <IndexPageTemplate data={data} />
    </MainLayout>
  );
};

export default IndexPage;

const IndexQuery = () => {
  const data = useStaticQuery(
    graphql`
      query IndexQuery {
        allStrapiArticle {
          edges {
            node {
              id
              title
              content
            }
          }
        }
      }
    `
  );

  const { allStrapiArticle: { edges: posts } } = data;

  return posts;
};
