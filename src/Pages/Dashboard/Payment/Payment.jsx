import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import UseSelectedClass from '../../../hooks/UseSelectedClass';

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payment = () => {
    // const location = useLocation();
    // const { id } = location.state || {};
    const { id } = useParams();
    console.log("_id" , id);
    const [selectedClass, refetch] = UseSelectedClass();

    // Retrieve the price based on the selected item's ID
    const selectedPrice = id ? selectedClass.find(item => item._id === id)?.price : undefined;
    console.log(selectedPrice);

    return (
        <div>
            <h2 className="text-3xl">Payment</h2>
            {selectedPrice && <p>Price: ${selectedPrice}</p>}
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
