import React from 'react';

const PopularClasses = () => {
    return (
        <div className='my-12'>
            <h1 className='text-4xl font-extrabold border-t-2 border-b-2 border-rose-200 text-center py-5'>Popular classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    );
};

export default PopularClasses;