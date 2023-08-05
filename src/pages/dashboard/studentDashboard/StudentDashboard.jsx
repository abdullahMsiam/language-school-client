import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';

const StudentDashboard = () => {
    const [enrolled, setEnrolled] = useState([]);
    UseTitle('Dashboard')

    useEffect(() => {
        fetch('https://language-school-server-abdullahmsiam.vercel.app/users')
            .then(res => res.json())
            .then(data => setEnrolled(data))
    }, [])


    const handleEnrol = (id) => {
        alert('Are you sure to enroll this course')
        const enrolItem = enrolled.find(en => en._id === id);
        console.log(enrolItem);
        const { class_name, class_image, instructor_name, price } = enrolItem;

        const newEnrol = { class_name, class_image, instructor_name, price }

        fetch('https://language-school-server-abdullahmsiam.vercel.app/enrols', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEnrol)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className='text-end mr-5'>
                <Link to="/enrol"> <button className='btn btn-outline btn-primary'>See Enrolled Classes</button> </Link>
            </div>
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
                                    <p className="py-6">Course Fee: ${item.price}</p>
                                    <button onClick={() => handleEnrol(item._id)} className="btn btn-neutral">Enroll now</button>
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