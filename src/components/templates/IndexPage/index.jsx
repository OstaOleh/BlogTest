import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const IndexPageTemplate = ({ data }) => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </>
);

IndexPageTemplate.propTypes = {
  data: PropTypes.any.isRequired,
};

export default IndexPageTemplate;
