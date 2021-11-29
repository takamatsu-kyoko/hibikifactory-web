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
        createNodeField({
            node,
            name: 'fileRelativeDirectory',
            value: parent.relativeDirectory
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter}) => {
    const { createPage } = actions

    const blogresult = await graphql(`
query {
  titles: allMdx(
    filter: {
      fields: {
        fileSourceInstanceName: {eq: "blog"},
        fileName: {eq: "index"}
      },
      frontmatter: {
        status: {nin: ["draft"]}
      }
    }
    sort: {fields: frontmatter___published_on, order: DESC}
  ) {
    edges {
      node {
        fields {
          fileRelativeDirectory
        }
        slug
        frontmatter {
          title
          categories
          status
          published_on(formatString: "YYYY-MM-DD")
          updated_on(formatString: "YYYY-MM-DD")
        }
      }
      next {
        slug
        frontmatter {
          title
        }
      }
      previous {
        slug
        frontmatter {
          title
        }
      }
    }
  }
  pages: allMdx(
    filter: {
      fields: {
        fileSourceInstanceName: {eq: "blog"}},
        frontmatter: {status: {nin: ["draft"]}
      }
    }
    sort: {fields: slug, order: ASC}
  ) {
    group(field: fields___fileRelativeDirectory) {
      fieldValue
      edges {
        node {
          id
          slug
        }
      }
    }
  }
}
`)
    if (blogresult.errors) {
        reporter.panicOnBuild(`Error occurred on CreatePages`)
        return
    }

    const posts = blogresult.data.titles.edges
    const page_group = blogresult.data.pages.group

    posts.forEach((post) => {
        const post_pages = page_group.find(group => group.fieldValue === post.node.fields.fileRelativeDirectory)

        post_pages.edges.forEach((page, i) => {
            createPage({
                path: `/blog/post/${page.node.slug}`,
                component: path.resolve('./src/templates/blog-post.js'),
                context: {
                    id: page.node.id,
                    postFrontmatter: post.node.frontmatter,
                    pagePos: {
                        currentPage: i + 1,
                        totalPages: post_pages.edges.length,
                        firstPageSlug: post.node.slug,
                    },
                    previous: post.next, // ソート順が DESC のため previousとnextを逆にする
                    next: post.previous,
                },
            })
        })
    })
}
