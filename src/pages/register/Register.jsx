import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const Register = () => {
    const { user, loading, createUser, updateUserProfile } = useContext(AuthContext)
    UseTitle('Register');

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const newUser = { name, email, photo };

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                updateUserProfile(name, photo)
                    .then(() => {
                        const savedPerson = { name: name, email: email }
                        fetch('http://localhost:5000/persons', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedPerson)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    alert('Sure to done!')
                                }
                            })
                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero w-full my-10">
                <div className="hero-content w-1/2">
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <h1 className="text-4xl text-center mt-5 font-bold">Register Now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="confirm password" name='confirmPassword' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' required className="input input-bordered" />
                            </div>
                            <div>
                                Have an account? <Link to="/login" className='text-red-500 mt-5'>Login</Link>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-neutral' value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;