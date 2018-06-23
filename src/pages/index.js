import React from 'react'
import Helmet from 'react-helmet'

import PostExcerpt from '../components/PostExcerpt'

const BlogIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.posts.edges
  return (
    <React.Fragment>
      <Helmet title={siteTitle} />
      {posts.map(({ node: post }) => (
        <PostExcerpt key={post.slug} post={post} />
      ))}
    </React.Fragment>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allContentfulPost {
      edges {
        node {
          slug
          date: createdAt(formatString: "MMMM D, YYYY")
          title {
            title
          }
          body {
            data: childMarkdownRemark {
              timeToRead
              excerpt
              html
            }
          }
        }
      }
    }
  }
`
