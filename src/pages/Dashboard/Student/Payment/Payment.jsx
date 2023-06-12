import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import websiteTitle from "../../../../utility/websiteTitle";
import LoadingSpinner from "../../../Others/LoadingSpinner/LoadingSpinner";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_PK);

const Payment = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [classInfo, setClassInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`${import.meta.env.VITE_LOCALHOST}/select-single-class/${id}`)
            .then(res => {
                console.log(res.data)
                setClassInfo(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [id])

    websiteTitle('Payment - Artshala')

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="my-10">
            <SectionTitle title={'Payment Now'} />
            <div className="mt-10">
                <h3 className="text-xl font-medium mb-4">You are one step away to enroll the class.</h3>
                <p>We ensure you that our payment system is more than secure. So, make a payment and be a student of the class <span className="text-[#FFB347] font-medium text-xl">{classInfo.class_name}</span>.</p>

                <h5 className="text-lg mt-5 font-medium">Payable Amount: BDT <span className="text-[#FFB347]">{classInfo?.price}</span></h5>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm classInfo={classInfo} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;