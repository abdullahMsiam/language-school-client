import React, { useEffect, useState } from 'react';
import Animated from './Animated';
import { Link } from 'react-router-dom';



const PopularInstructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://language-school-server-production-59b9.up.railway.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    let morePopular = [];
    const allIns = () => {
        morePopular = instructors.slice(6, instructors.length)
        console.log(morePopular)
    }

    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-14'>Our Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-7 md:mx-36'>
                {
                    instructors.slice(0, 6).map(item => (
                        <div className="flex mx-auto items-center w-11/12 md:w-96 bg-base-100 border border-black rounded-xl shadow-xl p-3 hover:bg-amber-200 hover:scale-105 hover:shadow-2xl duration-300" key={item._id}>
                            <div className=" grow">
                                <h2 className="font-bold">{item.instructor_name}</h2>
                                <p>Email: {item.instructor_email}</p>
                            </div>
                            <div>
                                <img src={item.instructor_image} className='rounded-full w-20' alt="Shoes" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='text-center mt-3'>
                <Link to="/instructors">
                    <button onClick={() => allIns()} className='btn btn-warning'>More Instructors</button>
                </Link>
            </div>

            <div>
                <h1 className='text-center text-4xl font-bold mt-7'>Extra Section here!</h1>
                <div className='text-center'>
                    <Animated></Animated>
                </div>

            </div>
        </div>
    );
};

export default PopularInstructor;