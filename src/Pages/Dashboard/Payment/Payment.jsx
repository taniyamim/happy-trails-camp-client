import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import UseSelectedClass from "../../../hooks/UseSelectedClass";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    const [selectedClass, refetch] = UseSelectedClass();
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div>
           
            <h2 className="text-3xl"> Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;