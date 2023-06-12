import React from 'react';
import UseSelectedClass from '../../../hooks/UseSelectedClass';
import { Helmet } from 'react-helmet-async';

const MyEnrolledClass = () => {
    const [selectedClass, refetch] = UseSelectedClass();
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
                            <th>Class</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.instructorName}
                                </td>
                                {/* <td>
                                    {item.instructorEmail}
                                </td> */}
                                <td className="text-end">${item.price}</td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;