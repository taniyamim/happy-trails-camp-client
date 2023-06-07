import React from 'react';

const ClassPopular = ({ item }) => {
    const { name, image, description, price, numberOfStudents } = item;
    return (
        <div>
            <div className="card w-96 bg-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{description}</p>
                    <p> <span className='font-bold'>Enrolled Students:</span> {numberOfStudents}</p>
                    <p> <span className='font-bold'>Price:</span> ${price}</p>
                    
                    <div className="card-actions">
                        <button className="btn text-white bg-rose-900">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassPopular;