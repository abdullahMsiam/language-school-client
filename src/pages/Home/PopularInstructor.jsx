import React, { useEffect, useState } from 'react';

const PopularInstructor = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const popular = instructors.slice(0, 6);

    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-5'>Popular Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-7 mx-12'>
                {
                    popular.map(item => (
                        <div className="card w-96 bg-base-100 shadow-xl p-3" key={item._id}>
                            <div className="card-body text-center">
                                <h2 className="font-bold">{item.instructor_name}</h2>
                                <p>Email: {item.instructor_email}</p>
                            </div>
                            <figure><img src={item.instructor_image} className='rounded-full' alt="Shoes" /></figure>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularInstructor;