import React from 'react';
import usePaymentClass from '../../../hooks/usePaymentClass';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [paymentClass, refetch] = usePaymentClass();
    return (
        <div className="">
            <Helmet>
                <title> Happy Trails Camp | Payment History</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center border-b-2">
                <h3 className="text-3xl">Payment Made: {paymentClass.length}</h3>


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction Id</th>
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
                                    {item.transactionId}
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

export default PaymentHistory;