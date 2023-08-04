import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from '../shared/Footer';
import Popular from './Popular';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
        </div>
    );
};

export default Home;