import React from 'react';

const Instructor = ({ instructor }) => {
    // console.log(instructor);

    const { instructorName, instructorImage, name, numberOfStudents } = instructor;
    return (
        <div>

            <div className="w-full bg-orange-700 bg-opacity-70 max-w-sm border border-gray-200 rounded-lg shadow text-black">
             
                <div className="flex flex-col items-center pb-10 py-5">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={instructorImage} />
                    <h5 className="mb-1 text-xl font-extrabold text-gray-900 ">{instructorName}</h5>
                    <span className="text-sm  text-white">{name}</span>
                    <button className='btn btn-outline btn-warning font-bold  px-4 py-2 rounded-md mt-5'>Learn More</button>
                  
                </div>
            </div>

        </div>
    );
};

export default Instructor;