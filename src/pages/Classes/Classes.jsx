import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Classes = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext);
    const [isDisable, setDisable] = useState('');

    useEffect(() => {
        fetch('https://language-school-server-abdullahmsiam.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])



    const condition = (id) => {
        const selectedClass = classes.find(cls => cls._id === id);
        console.log(selectedClass);
        const { class_name, class_image, instructor_name, price } = selectedClass;
        const name = user.displayName;
        const photo = user.photoURL
        const newUser = { name, photo, class_name, class_image, instructor_name, price }

        fetch('https://language-school-server-abdullahmsiam.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        // setDisable('disabled')

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
                                            <button onClick={() => condition(n._id)} className={`btn btn-sm btn-warning rounded-full`}
                                                disabled={`${(!user || (n.seat_quantity - n.enrolled_amount) === 0 || isDisable) ? 'disabled' : ''}`}
                                            >select</button>
                                            {/*  disabled={`${(!user ? 'disabled' : '') || isDisable}`} */}
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