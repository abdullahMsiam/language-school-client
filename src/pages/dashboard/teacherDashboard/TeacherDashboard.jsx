import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl text-center font-bold mt-8'>Added a new class</h1>
                <Link to="/addClass"><button className='btn btn-neutral'>Add Class</button></Link>
            </div>
        </div>
    );
};

export default TeacherDashboard;