import React, { useEffect, useState } from 'react';
import Instructor from '../../../components/Instructor/Instructor';


const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const popularInstructor = data.filter(instructor => instructor.numberOfStudents >= 15);
                setPopularInstructor(popularInstructor);
            });
    }, []);
    return (
        <div>
            <div className='my-12'>
                <h1 className='text-4xl font-extrabold border-t-2 border-b-2 text-white text-center py-5'>Popular Instructors</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                    {
                        popularInstructor.slice(0, 6).map(instructor => <Instructor key={instructor.instructorId} instructor={instructor}></Instructor> )
                    }

                </div>

            </div>
        </div>
    );
};

export default PopularInstructor;