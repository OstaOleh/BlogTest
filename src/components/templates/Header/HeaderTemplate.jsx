import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  background: #A2C7B3;
  margin: 0 auto;
  
`;

const HeaderContent = styled.div`
  padding: 1.45rem 1.0875rem;
`;

const HeaderTemplate = () => (
  <Header>
    <HeaderContent>
      <h3>
        <Link
          to="/"
          style={{
            color: `#446961`,
            textDecoration: `none`,
          }}
        >
          Toronto Cannabis Authority
        </Link>
      </h3>
    </HeaderContent>
  </Header>
)

HeaderTemplate.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderTemplate.defaultProps = {
  siteTitle: ``,
}

export default HeaderTemplate;
