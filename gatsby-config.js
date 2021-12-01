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
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `data_files`,
                path: `${__dirname}/src/data`,
                ignore: ['**/.*'],
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-yaml",
    ],
}
