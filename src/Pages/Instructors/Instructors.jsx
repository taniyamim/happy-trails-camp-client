import React, { useEffect, useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Instructors = () => {
    // const instructors = useLoaderData();
    // console.log(instructors);
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {

                setInstructors(data);
                console.log(data);
            });
    }, []);
    return (
        <div className=''>
            <Helmet>
                <title>
                    Happy Trails Camp | Instructors
                </title>
            </Helmet>
            <div className=''>
                <AttentionSeeker animate__rubberBand> <h1 className='text-4xl font-extrabold border-t-2 border-green-700 border-b-2 text-black text-center py-5'>Our Instructors</h1></AttentionSeeker>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>

                {
                    instructors.map(instructor => <div>
                        <div className="card card-side bg-white shadow-xl">

                            <figure><img src={instructor.instructorImage} className='h-24' alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.instructorName}</h2>
                                <p> <span className='font-bold'>Email:</span> {instructor.instructorEmail} </p>
                                <p> <span className='font-bold'>Number of Classes Taken:</span>  </p>

                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Instructors;