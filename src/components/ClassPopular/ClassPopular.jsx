import React from 'react';
import { Link } from 'react-router-dom';

const ClassPopular = ({ item }) => {
    const { name, image, description, price, numberOfStudents } = item;
    return (
        <div>
            <div className="card w-96 shadow-xl bg-orange-700 bg-opacity-70 text-white">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{description}</p>
                    <p> <span className='font-bold'>Enrolled Students:</span> {numberOfStudents}</p>
                    <p> <span className='font-bold'>Price:</span> ${price}</p>

                    <div className="card-actions">
                        <Link to='/classes'>
                            <button className="btn text-white font-bold bg-green-900">Enrol Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassPopular;