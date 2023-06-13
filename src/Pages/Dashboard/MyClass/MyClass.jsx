import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseSelectedClass from '../../../hooks/UseSelectedClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const MyClass = () => {
    const [selectedClass, refetch] = UseSelectedClass();
    const [selectedPrice, setSelectedPrice] = useState();

    const handleDelete = (item) => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClasses/${item._id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
                        }
                    });
            }
        });
    };

    const handlePay = (item) => {
        console.log(item);
        setSelectedPrice(item._id);
        console.log(item._id);
    };


    return (
        <div className="w-full">
            <Helmet>
                <title> Happy Trails Camp | My Selected Classes</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Class Selected: {selectedClass.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClass.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.instructorName}</td>
                                <td>${item.price}</td>
                                <td>
                                    <div className='flex gap-5'>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white">
                                            <FaTrashAlt />
                                        </button>
                                        <Link to={`/dashboard/payment/${item._id}`}>
                                            <button onClick={() => handlePay(item)} className="btn bg-pink-500 text-white btn-sm">
                                                PAY
                                            </button>
                                        </Link>
                                    </div>
                                </td>
                                <td>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;
