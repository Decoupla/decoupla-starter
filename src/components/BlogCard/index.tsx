import { graphql, Link } from 'gatsby';
import React from 'react';
import AuthorCard from '../AuthorCard';

const BlogCard: React.FC<{
    blogPost: GatsbyTypes.BlogCardFragment
}> = ( {
    blogPost,
} ) => {
    return (
        <Link to={`/${blogPost.slug}`} className="p-4 flex flex-col gap-2 border rounded">
            {blogPost.thumbnail && blogPost.thumbnail.output && (
                <img
                    src={blogPost.thumbnail.output.url}
                    alt={blogPost.title || ''}
                    className="mb-2 rounded object-cover h-[200px] w-full"
                />
            ) }
            <h2 className="text-lg font-bold">
                {blogPost.title}
            </h2>
            <p className="text-sm text-gray-500">
                Published on: {new Date(blogPost.datePublished).toLocaleDateString( 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                } )}
            </p>
            {blogPost.author && (
                <AuthorCard type="small" author={blogPost.author} />
            )}
        </Link>
    );
};

export const query = graphql`
    fragment BlogCard on Decoupla_BlogPost {
        id
        slug
        title
        datePublished
        thumbnail {
            output(format: WEBP, height: 400) {
                url
            }
        }
        author {
            ...AuthorCard
        }
    }
`;

export default React.memo( BlogCard );
