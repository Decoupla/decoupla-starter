import { CreatePagesArgs } from "gatsby"

const path = require('path')

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
   const { createPage } = actions


   const blogPosts = ( await graphql(`
      query BlogPostsQuery {
         Decoupla {
            allBlogPost(
                first: 99,
            ) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
         }
      }
   `) ).data as {
        Decoupla: {
             allBlogPost: {
                edges: Array<{
                 node: {
                    slug: string
                    id: string
                 }
                }>
             }
        }
   }

   for ( const edge of blogPosts.Decoupla.allBlogPost.edges ) {
        const pagePath = `/${ edge.node.slug }`
        console.log( 'Creating page:', pagePath )
        createPage({
            path: pagePath,
            component: path.resolve('./src/templates/BlogPost.tsx'),
            context: {
                blogPostId: edge.node.id,
            },
        } )
   }
}
