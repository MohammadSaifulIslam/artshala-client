import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const usePaymentData = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true)
    const [paymentData, setPaymentData] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_LOCALHOST}/payments/${user?.email}`)
            .then(res => {
                setPaymentData(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [user])
    return { paymentData , isLoading}
};

export default usePaymentData;