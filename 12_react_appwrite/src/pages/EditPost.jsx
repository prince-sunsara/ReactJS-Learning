import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import databaseService from '../appwrite/database'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post, setPost] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            databaseService.getPosts(slug).then(post => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return posts ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost