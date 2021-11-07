/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/src/contents/blog`,
                ignore: ['**/template'],
            }
        },
        "gatsby-plugin-mdx"
    ],
}
