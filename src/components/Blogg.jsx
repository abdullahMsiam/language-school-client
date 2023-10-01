import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogg = () => {

    const blog = useLoaderData();
    console.log(blog);
    return (
        <div>
            <h1 className='text-4xl text-center font-bold rounded-t-xl mx-auto py-12 bg-amber-200 w-3/4'>{blog.title}</h1>
            <div className='w-3/4 mx-auto bg-amber-200 px-7 pb-11'>
                <img className='h-96 w-full mx-auto rounded-lg' src={blog.photo_url} alt="" />
                <p className='btn btn-outline w-96 mt-3'> # {blog.tag}</p>
                <p className='text-3xl font-semibold mt-3'>Title: {blog.title}</p>
                <p className='text-2xl font-semibold mt-3'>Date: {blog.date}</p>
                <p className='text-2xl font-semibold mt-3'>Writer: {blog.author}</p>
                <p>
                    {blog.blog}
                </p>

            </div>
        </div>
    );
};

export default Blogg;