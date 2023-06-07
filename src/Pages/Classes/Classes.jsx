import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {

                setClasses(data);
                console.log(data);
            });
    }, []);
    return (
        <div>
            <div className=''>
                <h1 className='text-4xl font-extrabold border-t-2 border-b-2 text-white text-center py-5'>Classes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>

                {
                    classes.map(cls => <div>
                        <div className="card w-96 glass">
                            <figure><img src={cls.image} className='h-52 py-5 rounded-xl' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{cls.name}</h2>
                                <p> <span className='font-bold'>Instructor:</span> {cls.instructorName}</p>
                                <p> <span className='font-bold'>Available Seats:</span> {cls.instructorName}</p>
                                <p> <span className='font-bold'>Price:</span> ${cls.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn text-white bg-rose-900">Enrol now!</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Classes;