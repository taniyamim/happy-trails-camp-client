import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import UseSelectedClass from '../../hooks/UseSelectedClass';
const Classes = () => {
    const [classes, setClasses] = useState([]);
    // const classes =useLoaderData();
    console.log(classes);
    const { user } = useContext(AuthContext);
    const [, refetch] = UseSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                console.log(data);
            });
    }, []);
    const handleSelected = cls => {
        console.log(cls);
        if (user) {
            const selectedClass = { name:cls.name, image: cls.image, price: cls.price, instructorName: cls.instructorName, email: user.email}
          
            fetch('http://localhost:5000/selectedClasses', {
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
                <h1 className='text-4xl font-extrabold border-t-2 border-b-2 text-white text-center py-5'>Classes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {classes.map(cls => (
                    <div key={cls._id} className={`card w-96 glass ${cls.availableSeats === 0 ? 'bg-red-900 text-white' : ''}`}>
                        <figure><img src={cls.image} className='h-52 py-5 rounded-xl' alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cls.name}</h2>
                            <p> <span className='font-bold'>Instructor:</span> {cls.instructorName}</p>
                            <p> <span className='font-bold'>Available Seats:</span> {cls.availableSeats}</p>
                            <p> <span className='font-bold'>Price:</span> ${cls.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleSelected(cls)} className="btn text-white bg-rose-900">Select!</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
