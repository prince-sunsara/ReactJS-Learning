import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import databaseService from '../appwrite/database'
import { Button, Container } from '../components'
import parse from 'html-react-parser'

export default function Post() {
    const [post, setPost] = useState(null)
    const slug = useParams()
    const navigate = useNavigate()

    const userData = useSelector(state => state.auth.userData)
    const isAuther = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            databaseService.getSinglePost(slug).then(post => {
                if (post) setPost(post)
                else navigate("/")
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    const deletePost = () => {
        databaseService.deletePost(post.$id).then(status => {
            if (status) {
                databaseService.deleteFile(post.featuredImage);
                navigate('/')
            }
        })
    }

    return post ? (
        <div className='py-8'>
            <Container>
                <div className="flex w-full justify-center mb-4 relative border rounded-xl py-2">
                    <img
                        src={databaseService.filePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    {isAuther && (
                        <div className="absolute right-6 left-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor='bg-green-500'
                                    className='mr-3'
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor='bg-red-500'
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className='font-bold text-2xl'>{post.title}</h1>
                </div>
                <div className="browser-css">{parse(post.content)}</div>
            </Container>
        </div>
    ) : null
}
