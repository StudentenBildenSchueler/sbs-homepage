import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Nav from './comp'

const query = graphql`
  {
    nav: contentfulJson(title: { eq: "Nav" }) {
      data {
        nav {
          url
          title
          subNav {
            url
            title
            span
          }
        }
      }
    }
    chapters: contentfulJson(title: { eq: "Standorte" }) {
      data {
        chapters {
          url
          title
          inactive
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={({ nav, chapters }) => (
      <Nav nav={nav.data.nav} chapters={chapters.data.chapters} {...props} />
    )}
  />
)

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subNav: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          span: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
}
