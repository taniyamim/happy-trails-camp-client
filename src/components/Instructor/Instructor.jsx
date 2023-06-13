import React from 'react';

const Instructor = ({ instructor }) => {
    // console.log(instructor);

    const { instructorName, instructorImage, name, numberOfStudents } = instructor;
    return (
        <div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             
                <div className="flex flex-col items-center pb-10 py-5">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={instructorImage} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{instructorName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{name}</span>
                    <button className='btn-outline text-white px-4 py-2 rounded-md mt-5'>Learn More</button>
                  
                </div>
            </div>

        </div>
    );
};

export default Instructor;