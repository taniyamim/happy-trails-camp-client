import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import UseSelectedClass from '../../../hooks/UseSelectedClass';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
console.log(stripePromise);

const Payment = () => {
    // const location = useLocation();
    // const { id } = location.state || {};
    const { id } = useParams();
    console.log("_id" , id);
    const [selectedClass] = UseSelectedClass();

    const classDetails = selectedClass.find((item) => item._id === id);
    console.log(classDetails);
    const price = id ? selectedClass.find(item => item._id === id)?.price : undefined;
    console.log(price);
   

    return (
        <div>
            <h2 className="text-3xl">Payment</h2>
            {price && <p>Price: ${price}</p>}
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} classDetails={classDetails}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
