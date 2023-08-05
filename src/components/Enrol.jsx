import React, { useEffect, useState } from 'react';

const Enrol = () => {
    const [final, setFinal] = useState([]);

    useEffect(() => {
        fetch('https://language-school-server-abdullahmsiam.vercel.app/enrols')
            .then(res => res.json())
            .then(data => setFinal(data))
    }, [])

    let due = 0;
    for (const f of final) {
        due = f.price + due;
    }
    console.log(due.toFixed(2));

    return (
        <div>
            <div className='flex mx-auto justify-center gap-4 items-center'>
                <p className='text-2xl font-bold'> Your due amount ${due.toFixed(2)}</p>
                <button className='btn btn-outline btn-warning'>Pay</button>
            </div>
            <div>
                {
                    final.map(item => (
                        <div className="hero bg-red-300 w-1/2 mx-auto mt-6 p-6 rounded-xl "
                            key={item._id}>
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={item.class_image} className="max-w-sm rounded-lg shadow-2xl h-[160px]" />
                                <div>
                                    <h1 className="text-5xl font-bold">{item.class_name}</h1>
                                    <p className="py-6">Course Fee: ${item.price}</p>
                                    <button className="btn btn-neutral btn-outline">A big salute</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Enrol;