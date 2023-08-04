import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero w-full my-10">
                <div className="hero-content w-1/2">
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <h1 className="text-4xl text-center mt-5 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
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