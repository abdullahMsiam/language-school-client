import React, { useEffect, useState } from 'react';

const Popular = () => {

    const [classes, setClasses] = useState([]);


    const popularClass = classes.filter(n => n.enrolled_amount >= 25);
    const showClass = popularClass.slice(0, 6);
    console.log(showClass);


    useEffect(() => {
        fetch('https://language-school-server-production-59b9.up.railway.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])


    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-center my-6'>Popular Classes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12'>
                {
                    showClass.map(selected => (
                        <div className="card w-96 bg-base-100 shadow-xl" key={selected._id}>
                            <figure><img src={selected.class_image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class: {selected.class_name}</h2>
                                <p>Instructor: {selected.instructor_name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Popular;