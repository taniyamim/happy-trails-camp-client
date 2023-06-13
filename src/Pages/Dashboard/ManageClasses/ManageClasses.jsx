import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setAllClasses(data);
            });
    }, []);

    const handleApprove = async (classId, index) => {
        const classToUpdate = allClasses[index];

        if (classToUpdate.status === 'Approved') {
            // If the class is already approved, do nothing
            return;
        }

        try {
            // Disable the button
            setDisabledButtons(prevDisabledButtons => [
                ...prevDisabledButtons,
                index
            ]);

            const response = await fetch(`http://localhost:5000/allClasses/${classId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'Approved' }),
            });

            if (response.ok) {
                // Update the class status in the state
                setAllClasses(prevClasses =>
                    prevClasses.map((classItem, i) => {
                        if (i === index) {
                            return { ...classItem, status: 'Approved' };
                        }
                        return classItem;
                    })
                );
            } else {
                console.error('Failed to update class status');
            }
        } catch (error) {
            console.error('Error occurred while updating class status:', error);
        } finally {
            // Enable the button
            setDisabledButtons(prevDisabledButtons =>
                prevDisabledButtons.filter(buttonIndex => buttonIndex !== index)
            );
        }
    };

    const handleDeny = async (classId, index) => {
        const classToUpdate = allClasses[index];

        if (classToUpdate.status === 'Denied') {
            // If the class is already denied, do nothing
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/allClasses/${classId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'Denied' }),
            });

            if (response.ok) {
                // Update the class status in the state
                setAllClasses(prevClasses =>
                    prevClasses.map((classItem, i) => {
                        if (i === index) {
                            return { ...classItem, status: 'Denied' };
                        }
                        return classItem;
                    })
                );
            } else {
                console.error('Failed to update class status');
            }
        } catch (error) {
            console.error('Error occurred while updating class status:', error);
        }
    };


    return (
        <div className="w-full">
            <Helmet>
                <title>Happy Trails Camp | All Classes</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Classes: {allClasses.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClasses.map((item, index) => (
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
                                <td>{item.instructorName}</td>
                                <td>{item.instructorEmail}</td>
                                <td>{item.availableSeats}</td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <div className='bg-green-600 text-white font-bold badge badge-sm'>
                                        {item.status}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            className="btn btn-sm btn-success"
                                            onClick={() => handleApprove(item._id, index)}
                                            disabled={item.status === 'Approved' || item.status === 'Denied' }
                                        >
                                            Approve
                                        </button>

                                        <button
                                            disabled={item.status === 'Approved' || item.status === 'Denied'}
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDeny(item._id, index)}
                                        >
                                            Deny
                                        </button>

                                        <button className="btn btn-sm btn-warning">Send Feedback</button>
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

export default ManageClasses;
