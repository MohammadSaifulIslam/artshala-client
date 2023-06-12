import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentForm = ({ classInfo }) => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth()
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');

    console.log(processing)
    const { price, _id, class_name, photo, instructor_name, available_seats, class_id } = classInfo;
    console.log(available_seats)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            setError(null)
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        setProcessing(false)
        console.log(paymentIntent)
        if (paymentIntent.status === "succeeded") {
            setTransectionId(paymentIntent.id)
            // TODO: next step
            const paymentData = {
                price,
                transectionId: paymentIntent.id,
                name: user?.displayName,
                email: user?.email,
                date: new Date(),
                class_id: _id,
                class_name,
                photo,
                instructor_name
            }

            axiosSecure.post('/payments', paymentData)
                .then(res => {
                    if (res.data.insertedId) {


                        // remove class from selected classes
                        axios.delete(`${import.meta.env.VITE_LOCALHOST}/select-class/${_id}`)
                            .then(res => {
                                if (res.data.deletedCount) {

                                    // reduce available seat
                                    const reduceSeats = available_seats - 1;
                                    axios.patch(`${import.meta.env.VITE_LOCALHOST}/class/${class_id}`, { reduceSeats })
                                        .then(res => {
                                            if (res.data.modifiedCount) {
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'You successfully payment',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }
                            })
                            .catch(err => console.log(err))

                    }
                })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="md:w-1/2 mt-10 shadow-md p-5 rounded-lg">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="my-btn mt-8" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-600 mt-4">{error}</p>
            {
                transectionId && <p className="text-success">Your transection id: {transectionId}</p>
            }
        </div>
    );
};

export default PaymentForm;