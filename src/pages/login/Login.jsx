import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 w-full my-10">
                <div className="hero-content w-1/2">
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <h1 className="text-4xl text-center mt-5 font-bold">Login now!</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' required className="input input-bordered" />
                                <div>
                                    Don't have an account? <Link to="/register" className='text-red-500 mt-5'>Register</Link>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-neutral' value="Login" />
                            </div>
                        </form>
                        <div className='text-center my-7'>
                            <p>OR, Login with</p>
                            <button className='btn btn-circle btn-neutral mt-4'>G</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;