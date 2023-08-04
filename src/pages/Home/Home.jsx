import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from '../shared/Footer';
import Popular from './Popular';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;