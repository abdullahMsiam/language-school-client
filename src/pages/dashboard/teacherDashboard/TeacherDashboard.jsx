import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';

const TeacherDashboard = () => {
    UseTitle('Dashboard');
    const [addClass, setAddClass] = useState([]);

    useEffect(() => {
        fetch('https://language-school-server-abdullahmsiam.vercel.app/classes')
            .then(res => res.json())
            .then(data => setAddClass(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl text-center font-bold mt-8 mb-6'>Added a new class</h1>
                <Link to="/addClass"><button className='btn btn-neutral'>Add Class</button></Link>
            </div>

            <div>
                <h1 className="text-center mt-5 text-3xl font-bold">My Added Class list</h1>
                <div>
                    <div className="overflow-x-auto w-1/2 mx-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    addClass.map((item, index) => (
                                        <tr key={item._id}>
                                            <th>{index + 1}</th>
                                            <td>{item.class_name}</td>
                                            <td>{item.instructor_name}</td>
                                            <td>{item.enrolled_amount}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TeacherDashboard;