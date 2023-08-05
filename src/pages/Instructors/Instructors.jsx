import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://language-school-server-abdullahmsiam.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>All Instructors</h1>
            <div>
                <div className="overflow-x-auto w-3/4 mx-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                instructors.map((n, index) => (
                                    <tr key={n._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={n.instructor_image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{n.instructor_name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {n.instructor_email}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{n.class_name}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Instructors;