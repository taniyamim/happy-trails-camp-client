import React from 'react';
import { Helmet } from 'react-helmet-async';
import usePaymentClass from '../../../hooks/usePaymentClass';

const MyEnrolledClass = () => {
    const [paymentClass, refetch] = usePaymentClass();
    // console.log(paymentClass);
    return (
        // <h2>p</h2>
        <div className="w-5/6">
            <Helmet>
                <title> Happy Trails Camp | Enrolled Classes</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Enrolled Class: {paymentClass.length}</h3>


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-black">
                    {/* head */}
                    <thead>
                        <tr className='text-black'>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>date</th>
                            <th>Status</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                
                                <td>
                                    {item.date}
                                </td>
                                {/* <td>
                                    {item.instructorName}
                                </td> */}
                                <td className="text-end">{item.status}</td>
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