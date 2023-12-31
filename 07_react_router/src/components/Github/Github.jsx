import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


export default function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/prince-sunsara")
    //         .then(res => res.json())
    //         .then(data => { setData(data); console.log(data) })
    // }, [])


    // // useLoaderData
    const data = useLoaderData();

    return (
        <div className='bg-gray-700 p-4 text-white text-3xl text-center flex items-center justify-around'>
            <img src={data?.avatar_url} alt="Github Avatar" width={200} className='block rounded-full border ' />
            <span className='font-serif'>
                Github Followers : {data?.followers}
            </span>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prince-sunsara');
    return response.json()
}