import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const usePaymentData = () => {
    const { user } = useAuth();
    const [paymentData, setPaymentData] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_LOCALHOST}/payments/${user?.email}`)
            .then(res => {
                setPaymentData(res.data)
            })
            .catch(err => console.log(err))
    }, [user])
    return { paymentData}
};

export default usePaymentData;