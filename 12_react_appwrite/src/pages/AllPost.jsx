import React, { useState, useEffect } from 'react'
import databaseService from '../appwrite/database'
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts().then(posts => {
            if (posts && posts.documents) setPosts(posts.documents)
            // console.log(posts);
        })
    }, [])


    return (
        <div className='w-full py-8'>
            <Container>
                <div className="flex flex-wrap">
                    {posts.map(post => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                            {/* <PostCard {...post} /> */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost