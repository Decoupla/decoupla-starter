import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import HTMLContents from "../components/HTMLContents";
import AuthorCard from "../components/AuthorCard";

const BlogPost: React.FC<PageProps<Queries.BlogArticleQuery>> = ({ data }) => {
    const article = data.Decoupla.blogPost?.node;

    return (
        <div className="flex flex-col gap-4 pb-12">
            <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
            {article?.thumbnail && article.thumbnail.output && (
                <img
                    src={article.thumbnail.output.url}
                    alt={article.title || ""}
                    className="mb-4 rounded object-contain h-[400px] w-full"
                />
            ) }
            { article?.author && (
                <AuthorCard
                    author={article.author}
                    type="medium"
                />
            ) }
            <div>
                {article?.tags && article.tags.length > 0 && (
                    <p>Tags: {article.tags.join(", ")}</p>
                )}
            </div>
            <HTMLContents contents={article?.content?.htmlContent || ""} />
        </div>
    );
};


export const query = graphql`
	query BlogArticle( $blogPostId: String! ) {
		Decoupla {
			blogPost(
				filters: {
					id: {
						eq: $blogPostId,
					}
				}
			) {
				node {
					id
                    title
                    tags
                    thumbnail {
                        output(format: WEBP, height: 600) {
                            url
                        }
                    }
                    content {
                        htmlContent: content
                    }
                    author {
                        ...AuthorCard
                    }
                }
			}
		}
	}
`

export default BlogPost;
