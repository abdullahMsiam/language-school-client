import React, { useEffect, useState } from 'react';

const Popular = () => {

    const [classes, setClasses] = useState([]);


    const popularClass = classes.filter(n => n.enrolled_amount >= 25);
    const showClass = popularClass.slice(0, 6);



    useEffect(() => {
        fetch('https://language-school-server-production-59b9.up.railway.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])


    return (
        <div className='md:mx-28'>
            <h1 className='text-4xl font-bold text-center my-6'>Explore Popular Classes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    showClass.map(selected => (
                        <div className=" " key={selected._id}>
                            <div className='card relative w-11/12 md:w-96 bg-base-100 shadow-xl hover:shadow-2xl duration-500 mx-auto 
                            '>
                                <div class="absolute md:w-96 mx-auto p-6 inset-0 bg-amber-400 text-black opacity-0 hover:opacity-90 transition-opacity duration-700 hover:z-10 rounded-xl">
                                    <p className="text-lg font-semibold">Class Name: {selected.class_name}</p>
                                    <p className="text-lg font-semibold">Instructor: {selected.instructor_name}</p>
                                    <p className="text-lg font-bold underline mt-2">Short Review:</p>
                                    <p className="text-lg font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam repudiandae nisi quam ex accusamus veritatis.</p>
                                    <p className="text-3xl border w-1/2 text-center rounded-lg border-black font-bold mt-8">Price: 99$</p>
                                </div>
                                <figure><img className=' w-full h-56 hover:scale-125 hover:translate-x-2 hover:translate-y-2 duration-700' src={selected.class_image} alt="Shoes" /></figure>
                                <div className="card-body bg-amber-100 rounded-xl">
                                    <h2 className="card-title">Class: {selected.class_name}</h2>
                                    <p>Instructor: {selected.instructor_name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Popular;