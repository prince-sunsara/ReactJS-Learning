import React, { useEffect, useState } from 'react'
import databaseService from '../appwrite/database'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        databaseService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (posts.length === 0) {
        return (
            <div className="w-full mt-4 py-8 text-center">
                <Container>
                    <div className='flex flex-wrap'>
                        <h1>No posts yet!</h1>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map(post => (
                        <div className="p2 w-1/4" key={post.$id}>
                            {/* <PostCard post={post} /> */}
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home