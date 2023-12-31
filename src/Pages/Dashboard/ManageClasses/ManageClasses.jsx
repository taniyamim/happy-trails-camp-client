import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        fetch('https://summer-camp-server-bay.vercel.app/allClasses')
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

            const response = await fetch(`https://summer-camp-server-bay.vercel.app/allClasses/${classId}`, {
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
            const response = await fetch(`https://summer-camp-server-bay.vercel.app/allClasses/${classId}`, {
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

    const handleFeedback = async () => {
        const classId = currentItem._id;

        try {
            const response = await fetch(`https://summer-camp-server-bay.vercel.app/allClasses/${classId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback }),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Feedback Sent Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                setFeedback('');
                setShowModal(false);
            } else {
                console.error('Failed to send feedback');
            }
        } catch (error) {
            console.error('Error occurred while sending feedback:', error);
        }
    };

    const openModal = (classId) => {
        const selectedItem = allClasses.find(item => item._id === classId);
        setCurrentItem(selectedItem);
        setShowModal(true);
    };

    const closeModal = () => {
        setCurrentItem(null);
        setShowModal(false);
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
                <table className="table w-full text-black">
                    <thead>
                        <tr className='text-black'>
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
                                            disabled={item.status === 'Approved' || item.status === 'Denied'}
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

                                        <button
                                            onClick={() => openModal(item._id)}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Send Feedback
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 w-80">
                        <h3 className="font-bold text-lg mb-4">Send Feedback</h3>
                        <textarea
                            className="form-input mb-4"
                            placeholder="Enter your feedback"
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                            <button className="btn btn-primary mr-2" onClick={handleFeedback}>
                                Send
                            </button>
                            <button className="btn btn-secondary" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;
