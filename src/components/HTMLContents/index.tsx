import React from 'react';

const HTMLContents: React.FC<{
    contents: string;
}> = ({ contents }) => {
    return (
        <div
            className="
                prose prose-slate dark:prose-invert
                [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4
                [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-4
                [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mb-4
                [&>h5]:text-base [&>h5]:font-semibold [&>h5]:mb-4
                [&>h6]:text-sm [&>h6]:font-semibold [&>h6]:mb-4
                [&>p]:text-base [&>p]:mb-2
                [&>ul]:list-disc [&>ul>li]:ml-4 [&>ul>li]:mb-2
                [&>ol]:list-decimal [&>ol>li]:ml-4 [&>ol>li]:mb-2
                [&>blockquote]:border-l-4 [&>blockquote]:pl-4
                [&>blockquote]:text-gray-600
                [&>blockquote]:dark:text-gray-400
                [&>a]:text-blue-600
                [&>a]:hover:text-blue-800
                [&>a]:dark:text-blue-400
                [&>a]:dark:hover:text-blue-600
                [&>code]:bg-gray-100 [&>code]:dark:bg-gray-800
                [&>code]:px-1
                [&>code]:py-0.5
                [&>code]:rounded
                [&>code]:font-mono
                [&>pre]:bg-gray-100 [&>pre]:dark:bg-gray-800
                [&>pre]:p-4
                [&>pre]:rounded
                [&>pre]:overflow-x-auto
                [&>pre]:font-mono
                [&>img]:rounded
                [&>img]:max-w-full
                [&>img]:h-auto
                [&>img]:object-contain
                [&>table]:w-full
                [&>table]:border-collapse
                [&>table]:mt-4
                [&>table]:mb-4
                [&>table]:text-sm
                [&>table]:text-left
                [&>table]:border
                [&>table]:border-gray-300
                [&>table]:dark:border-gray-600
                [&>table>thead]:bg-gray-200
                [&>table>thead]:dark:bg-gray-700
                [&>table>thead>tr>th]:p-2
                [&>table>tbody>tr>td]:p-2
                [&>table>tbody>tr>td]:border-t
                [&>table>tbody>tr>td]:border-gray-300
                [&>table>tbody>tr>td]:dark:border-gray-600
            "
            dangerouslySetInnerHTML={{ __html: contents }}
        />
    );
};

export default HTMLContents;
