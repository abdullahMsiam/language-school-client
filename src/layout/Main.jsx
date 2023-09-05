import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto pt-16'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;