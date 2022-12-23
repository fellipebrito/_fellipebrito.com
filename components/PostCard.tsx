import React from 'react'

type Post = {
    title: string,
    excerpt: string
}

const PostCard = ({ title, excerpt }:Post) => {
    return (
        <div>
            {title}
            {excerpt}
        </div>
    )
}

export default PostCard