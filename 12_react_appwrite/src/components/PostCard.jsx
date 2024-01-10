import React from 'react'
import databaseService from '../appwrite/database'
import { Link } from 'react-router-dom'


function PostCard({
    $id,
    title,
    featuredImage
}) {

    const placeholderImage = 'https://via.placeholder.com/150' // Add a placeholder image URL

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-full p-4'>
                <div className="w-full justify-center mb-4">
                    <img
                        src={featuredImage ? databaseService.filePreview(featuredImage) : placeholderImage}
                        alt={title}
                        className='rounded-xl'
                    />
                </div>
                <h2
                    className='text-xl font-bold'
                >
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard