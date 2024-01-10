import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import databaseService from '../../appwrite/database'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({ post }) {
    // console.log(post)
    const { handleSubmit, register, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    });

    const navigate = useNavigate()
    let userData = useSelector((state) => state.auth.userData)
    // console.log(userData)

    const submit = async (data) => {
        // console.log(data)
        // console.log(data.$id);
        if (!post) {
            console.log(data.image[0]);
            const file = await databaseService.fileUpload(data.image[0]);
            console.log(file);

            if (file) {
                data.featuredImage = file.$id;
                const dbPost = await databaseService.createPost({
                    ...data,
                    userId: userData.$id,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        } else {
            const file = data.image[0] ? await databaseService.fileUpload(data.image[0]) : null;

            if (file) databaseService.deleteFile(post.featuredImage)

            const dbPost = await databaseService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        })
        return () => subscription.unsubscribe()

    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className="w-2/3 px-2">
                <Input
                    label='Title: '
                    placeholder='Title'
                    className='mb-4'
                    {...register('title', {
                        required: true
                    })}
                />
                <Input
                    label='Slug: '
                    placeholder="Slug"
                    className='mb-4'
                    {...register('slug', {
                        required: true
                    })}
                    onInput={e => {
                        setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />
                <RTE label='Content: ' name='content' control={control} defaultValue={getValues('content')} />
            </div>

            <div className="w-1/3 px-2">
                <Input
                    label='Featured Image: '
                    type='file'
                    className='mb-4'
                    accept='image/png, image/jpg, image/jpeg, image/gif'
                    {...register('image', { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img src={databaseService.filePreview(post.featuredImage)} alt={post.title} className='rounded-lg' />
                    </div>
                )}

                <Select
                    options={['active', 'inactive']}
                    label="Status"
                    className='mb-4'
                    {...register("status", { required: true })}
                />

                <Button type='submit' bgColor={post ? 'bg-green-500' : undefined} className='w-full'>{post ? 'Update' : 'Submit'}</Button>
            </div>
        </form>
    )
}

export default PostForm