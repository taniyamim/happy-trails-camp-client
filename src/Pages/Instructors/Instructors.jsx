import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {

                setInstructors(data);
                console.log(data);
            });
    }, []);
    return (
        <div className=''>
            <div className=''>
                <h1 className='text-4xl font-extrabold border-t-2 border-b-2 text-white text-center py-5'>Our Instructors</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>

                {
                    instructors.map(instructor => <div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={instructor.instructorImage} className='h-24' alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.instructorName}</h2>
                                <p> <span className='font-bold'>Email</span> {instructor.email} </p>
                                
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Instructors;