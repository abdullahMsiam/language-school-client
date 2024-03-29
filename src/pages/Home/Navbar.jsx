import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
    }
    return (
        <div className='sticky top-0 left-0 right-0 z-20 bg-white bg-opacity-90'>
            <div className=" navbar bg-base-300 bg-transparent font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <a>Explore</a>
                                <ul className="p-2">
                                    <li> <Link>Instructors</Link> </li>
                                    <li> <Link>Classes</Link> </li>
                                    <li> <Link to="/dashboard/studentdashboard">student Dashboard</Link> </li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl font-bold">KNOW-Lng</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/instructors">Instructors</Link> </li>
                        <li> <Link to="classes">Classes</Link> </li>
                        {
                            user ? <>
                                <li><Link to="/dashboard/studentdashboard">Student Dashboard</Link>  </li>
                                <li><Link to="/teacherDashboard">Teacher Dashboard</Link>  </li>
                            </> : <></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <p className='text-black'>{user.displayName}</p>
                                <img src={user.photoURL} className='rounded-3xl' alt="" />
                                <Link><button onClick={handleLogout} className='btn btn-warning rounded-full'>Logout</button></Link>
                            </>
                            :
                            <>
                                <Link to="/login"><button className='btn mx-3 btn-sm btn-neutral rounded-full'>Login</button></Link>
                                <p> or </p>
                                <Link to="/register"><button className='mx-3 btn btn-sm btn-warning rounded-full'>Register</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;