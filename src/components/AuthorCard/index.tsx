import { graphql, Link } from 'gatsby';
import React from 'react';

const AuthorCard: React.FC<{
    author: GatsbyTypes.AuthorCardFragment;
    type: 'small' | 'medium';
}> = ( {
    author,
    type = 'small',
} ) => {
    const avatar = type === 'small' ? author.avatarSmall : author.avatarMedium;

    return (
        <div className="flex items-center gap-2">
            {avatar && avatar.output && (
                <img
                    src={avatar.output.url}
                    alt={author.fullName || ''}
                    data-size={type}
                    className="
                        rounded-full object-cover
                        data-[size='small']:w-[32px]
                        data-[size='medium']:w-[64px]
                        data-[size='small']:h-[32px]
                        data-[size='medium']:h-[64px]
                        data-[size='small']:min-w-[32px]
                        data-[size='medium']:min-w-[64px]
                        data-[size='small']:min-h-[32px]
                        data-[size='medium']:min-h-[64px]
                    "
                />
            )}
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold">
                    {author.fullName}
                </h2>
                { type === "medium" && author.bio && author.bio.content && (
                    <p className="text-sm text-gray-500">
                        {author.bio.content}
                    </p>
                )}
            </div>

        </div>
    );
};

export const query = graphql`
    fragment AuthorCard on Decoupla_Author {
        id
        fullName
        bio {
            content
        }
        avatarSmall: avatar {
            output(format: WEBP, height: 64, width: 64) {
                url
            }
        }
        avatarMedium: avatar {
            output(format: WEBP, height: 128, width: 128) {
                url
            }
        }
    }
`;

export default React.memo( AuthorCard );
