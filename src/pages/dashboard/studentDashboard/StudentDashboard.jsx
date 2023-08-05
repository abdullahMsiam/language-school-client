import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
    const [enrolled, setEnrolled] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setEnrolled(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-5">Selected Class by Users</h1>
            <div>
                {
                    enrolled.map(item => (
                        <div className="hero bg-base-200 w-1/2 mx-auto mt-6 p-6 rounded-xl"
                            key={item._id}>
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={item.class_image} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{item.class_name}</h1>
                                    <p className="py-6">{item.price}</p>
                                    <button className="btn btn-neutral">Enroll now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default StudentDashboard;