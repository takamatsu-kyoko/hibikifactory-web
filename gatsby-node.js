const path = require("path")

// https://github.com/gatsbyjs/gatsby/issues/1634
exports.onCreateNode = ({ node, actions, getNode}) => {
    const { createNodeField } = actions

    if(node && node.internal && node.internal.type === 'Mdx') {
        const parent = getNode(node.parent)

        createNodeField({
            node,
            name: 'fileSourceInstanceName',
            value: parent.sourceInstanceName
        })
        createNodeField({
            node,
            name: 'fileName',
            value: parent.name
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter}) => {
    const { createPage } = actions

    const blogresult = await graphql(`
query MyQuery {
  allMdx(
    filter: {
      fields: {fileSourceInstanceName: {eq: "blog"}},
      frontmatter: { status: {nin: ["draft"]}}
    sort: {fields: frontmatter___published_on, order: ASC}
    }
  ) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`)
    if (blogresult.errors) {
        reporter.panicOnBuild(`Error occurred on CreatePages`)
        return
    }

    blogresult.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/post/${node.slug}`,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                id: node.id,
            },
        })
    })
}
