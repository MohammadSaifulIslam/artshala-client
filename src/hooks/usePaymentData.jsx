import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const usePaymentData = () => {
    const { user } = useAuth();
    const [enrolledClasses, setEnrolledclasses] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_LOCALHOST}/payments/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setEnrolledclasses(res.data)
            })
            .catch(err => console.log(err))
    }, [user])
    return {enrolledClasses}
};

export default usePaymentData;