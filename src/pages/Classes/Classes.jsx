import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Classes = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext);
    const [isDisable, setDisable] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])



    const condition = (id) => {

        setDisable('disabled')
    }

    return (
        <div>


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
                                <th>Available seats</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                classes.map((n, index) => (
                                    <tr key={n._id} className={`${(n.seat_quantity - n.enrolled_amount) === 0 ? 'bg-red-600' : ''}`}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={n.class_image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{n.class_name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {n.instructor_name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{n.instructor_email}</span>
                                        </td>
                                        <td>
                                            {
                                                n.seat_quantity - n.enrolled_amount
                                            }
                                        </td>
                                        <td>
                                            ${n.price}
                                        </td>
                                        <td>
                                            <button onClick={() => condition(n._id)} className={`btn btn-sm btn-warning rounded-full`} disabled={`${(!user ? 'disabled' : '') || isDisable}`}>select</button>
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

export default Classes;