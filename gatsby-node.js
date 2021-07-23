const path = require('path');

exports.createPages = async ( { graphql,actions }) => {
    const  { data } = await graphql(`
    query DesignsTemplate {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
              stack
              title
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path : '/design/' + node.frontmatter.slug,
            component : path.resolve('./src/templates/design-details.js'),
            context : { slug : node.frontmatter.slug}
        })
    });
}