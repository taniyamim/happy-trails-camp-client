import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import UseInstructorClass from '../../../hooks/userInstructorClass';
import { RxUpdate } from "react-icons/rx";

const InstructorClasses = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [axiosSecure] = useAxiosSecure();
    const [addClass, refetch] = UseInstructorClass();
    console.log('classess', addClass);

    // const { refetch } = useQuery({
    //     queryKey: ['addClass', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure(`/addClass?email=${user.email}`);
    //         const data = res.data;
    //         setAddClass(data);
    //         console.log(data);
    //         return data;
    //     },
    // });



    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addClass/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
                        }
                    });
            }
        });
    };
    const handleUpdate = item => {
        console.log(item);
       
      };

    return (
        <div className="">
            <Helmet>
                <title>Happy Trails Camp | My Classes</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Classes: {addClass.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black'>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled Students</th>
                            <th>Available Seats</th>
                            <th>Feedbacks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addClass.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className="text-end">${item.price}</td>
                                <td> <div className='bg-green-600 text-white font-bold badge badge-sm'>
                                    {item.status}
                                </div></td>
                                <td>
                                    {item.enrolledStudents}
                                </td>
                                <td>
                                    {item.availableSeats}
                                </td>
                                <td>
                                    {item.feedback}
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleDelete(item)} className="btn btn-sm btn-ghost bg-red-600 text-white">
                                            <FaTrashAlt />
                                        </button>
                                        <button onClick={() => handleUpdate(item)} className="btn btn-sm btn-warning text-white">
                                        <RxUpdate></RxUpdate>Update
                                        </button>
                                        
                                        
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;
