import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import UseSelectedClass from '../../hooks/UseSelectedClass';
import { AttentionSeeker } from 'react-awesome-reveal';
const Classes = () => {
    const [classes, setClasses] = useState([]);
    // const classes =useLoaderData();
    console.log(classes);
    const { user } = useContext(AuthContext);
    const [, refetch] = UseSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        fetch('https://summer-camp-server-bay.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                console.log(data);
            });
    }, []);
    const handleSelected = cls => {
        console.log(cls);
        if (user) {
            const selectedClass = {classId:cls._id, name:cls.name, image: cls.image, price: cls.price, instructorName: cls.instructorName, availableSeats: cls.availableSeats, email: user.email}
          
            fetch('https://summer-camp-server-bay.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                       refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Selected.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <Helmet>
                <title>
                    Happy Trails Camp | Classes
                </title>
            </Helmet>
            <div className=''>
            <AttentionSeeker animate__rubberBand> <h1 className='text-4xl font-extrabold border-t-2 border-green-700 border-b-2 text-black text-center py-5'>Our classes</h1></AttentionSeeker>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {classes.map(cls => (
                    <div key={cls._id} className={`card  w-96 glass ${cls.availableSeats === 0 ? 'bg-red-900 text-white' : ''}`}>
                        <figure><img src={cls.classImg} className='h-52 py-5 rounded-xl' alt="img" /></figure>
                        <div className="card-body bg-orange-900 text-white">
                            <h2 className="card-title">{cls.name}</h2>
                            <p> <span className='font-bold'>Instructor:</span> {cls.instructorName}</p>
                            <p> <span className='font-bold'>Available Seats:</span> {cls.availableSeats}</p>
                            <p> <span className='font-bold'>Price:</span> ${cls.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleSelected(cls)} className="btn text-white bg-green-900">Select!</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
