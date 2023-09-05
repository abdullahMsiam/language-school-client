import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboards = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  min-h-full md:bg-slate-400 p-4 w-80 text-base-content">
                        {/* Sidebar content here */}
                        <li className='mt-4'>
                            <NavLink to="/">Home Page</NavLink>
                        </li>
                        <hr className='border border-black mb-4' />
                        <li className='mt-4'>
                            <NavLink>Profile</NavLink>
                        </li>
                        <li className='mt-4'>
                            <NavLink to="/dashboard/studentdashboard">My Selected Course</NavLink>
                        </li>
                        <li className='mt-4'>
                            <NavLink to="/dashboard/enrol">My Cart</NavLink>
                        </li>
                        <li className='mt-4'>
                            <NavLink>Payment Process</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboards;