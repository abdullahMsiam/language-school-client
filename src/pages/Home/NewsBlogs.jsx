import React, { useEffect, useState } from 'react';
import { FaCalendar, FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://language-school-server-production-59b9.up.railway.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    return (
        <div className=' mx-auto md:mx-28 mt-8'>
            <h1 className='text-center font-bold text-4xl mb-3'>Latest News and Blogs</h1>
            <div className='grid grid-cols-3 justify-items-stretch gap-9 '>
                {
                    blogs.map(blog => (
                        <div className="card card-compact bg-base-100 shadow-xl ">
                            <figure><img className='h-56 w-full hover:scale-110 duration-300' src={blog.photo_url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1 className='font-bold text-xl'>#{blog.tag}</h1>
                                <h2 className="card-title">{blog.title}</h2>
                                <p className='font-bold'>Author: {blog.author}</p>
                                <hr className='border-1 border-black' />

                                <div className='flex mt-2'>
                                    <p className='flex gap-3 items-center'> <FaCalendar></FaCalendar> {blog.date} </p>
                                    <Link to={`/blogs/${blog._id}`}>
                                        <p className='text-blue-700 font-bold flex items-center hover:text-blue-800 hover:font-semibold'>Read This <FaGreaterThan></FaGreaterThan> </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NewsBlogs;