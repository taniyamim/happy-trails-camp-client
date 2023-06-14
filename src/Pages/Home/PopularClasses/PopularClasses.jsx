import React, { useEffect, useState } from 'react';
import ClassPopular from '../../../components/ClassPopular/ClassPopular';
import { AttentionSeeker, Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    const [popularClass, setPopularClass] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://summer-camp-server-bay.vercel.app/dummyClasses')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.numberOfStudents >= 10);
                setPopularClass(popularClasses);
            });
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className='my-12'>
            <AttentionSeeker animate__rubberBand> <h1 className='text-4xl font-extrabold border-t-2 border-green-700 border-b-2 text-black text-center py-5'>Popular classes</h1></AttentionSeeker>
            <Slide triggerOnce>
            </Slide>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {showAll
                    ? popularClass.map(item => <ClassPopular key={item._id} item={item} />)
                    : popularClass.slice(0, 6).map(item => <ClassPopular key={item._id} item={item} />)}
            </div>
            {!showAll && popularClass.length > 6 && (
                <div className='flex justify-center'>
                    <button className='bg-orange-700 text-white px-4 py-2 rounded-md' onClick={handleShowAll}>
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default PopularClasses;
