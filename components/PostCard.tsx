// @ts-nocheck

import React from 'react'
import Link from 'next/link'
import { Author } from '../components/'

const PostCard = ({ post }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img src={post.featuredImage.url} alt={post.title} className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'></img>
            </div>
            <h1 className='transition duration-100 text-center mb-8 cursor-pointer hover:text-green-600 text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <Author post={post} />
            </div>
            <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8 italic'>{post.excerpt}</p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-green-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                        Continue Reading...
                    </span>
                </Link>

            </div>
        </div >
    )
}

export default PostCard