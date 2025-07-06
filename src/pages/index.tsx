import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import BlogCard from "../components/BlogCard"

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = ({ data }) => {

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        { ( data.Decoupla.allBlogPost?.edges || [] ).map(( edge ) => {
          if ( !edge?.node ) {
            return null
          }
          return (
            <BlogCard
              key={edge.node.id}
              blogPost={edge.node}
            />
          )
        }) }
      </div>
    </div>
  )
};

export const query = graphql`
  query HomePage {
    Decoupla {
      allBlogPost(first: 99, sort: { field: datePublished, direction: DESC }) {
        edges {
          node {
            id
            slug
            datePublished
            ...BlogCard
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Decoupla Starter</title>
