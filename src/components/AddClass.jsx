import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import UseTitle from '../hooks/UseTitle';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    UseTitle('Add classes')

    const handleAddClass = event => {
        event.preventDefault();
        alert('Are you sure')

        const form = event.target;

        const class_name = form.className.value;
        const class_image = form.classImage.value;
        const instructor_name = form.instructorName.value;
        const instructor_email = form.instructorEmail.value;
        const seat_quantity = form.seatQuantity.value;
        const price = form.price.value;
        const enrolled_amount = form.enrolledAmount.value;

        const newClass = { class_name, class_image, instructor_name, instructor_email, seat_quantity, price, enrolled_amount };

        console.log(newClass);

        fetch('https://language-school-server-abdullahmsiam.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center">Add Class</h1>
                        <form onSubmit={handleAddClass} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name</span>
                                </label>
                                <input type="text" placeholder="class name" name='className' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" placeholder="class image" name='classImage' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" placeholder="Instructor Name" name='instructorName' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="text" placeholder="email" name='instructorEmail' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seat</span>
                                </label>
                                <input type="text" placeholder="seat" name='seatQuantity' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Course Fee</span>
                                </label>
                                <input type="text" placeholder="price" name='price' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enroll Amount</span>
                                </label>
                                <input type="text" placeholder="enrolled amount" name='enrolledAmount' className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-warning' type="submit" value="Add Class" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;