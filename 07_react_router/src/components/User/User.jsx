import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { id } = useParams()
    return (
        <div
            className='bg-gray-700 text-white text-3xl text-center py-4 font-serif'
        >User : {id}</div>
    )
}
