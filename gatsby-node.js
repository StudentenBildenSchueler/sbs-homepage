const path = require(`path`)
const glob = require(`glob`)
const lodash = require(`lodash`)

const templates = glob.sync(`./src/templates/*.js`, {
  absolute: true,
})

const contentfulQuery = contentType => `
  {
    content: allContentful${contentType} {
      edges {
        node {
          internal {
            type
          }
          slug
        }
      }
    }
  }
`

const pageSets = templates.map(template => {
  const type = path.basename(template, `.js`)
  return {
    query: contentfulQuery(lodash.upperFirst(type)),
    component: template,
  }
})

const pagePath = node => {
  switch (node.internal.type) {
    case `ContentfulPost`:
      return `blog/` + node.slug
    default:
      if (node.slug === `404`) return `404.html`
      return node.slug
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await pageSets.forEach(async ({ query, component }) => {
    const response = await graphql(query)
    if (response.errors) throw new Error(response.errors)
    await response.data.content.edges.forEach(edge => {
      // exclude pages defined in src/pages
      const { slug } = edge.node
      if (![`/`, `standorte`, `anmeldung`].includes(slug)) {
        actions.createPage({
          path: pagePath(edge.node),
          component,
          context: { slug },
        })
      }
    })
  })
}
