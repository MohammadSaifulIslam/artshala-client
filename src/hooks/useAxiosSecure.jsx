import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

// Create an Axios instance with a base URL
const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_LOCALHOST}`,
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();


    useEffect(() => {
        // interceptor for inject the authorization header
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // interceptor for handle unauthorized responses (401 and 403)
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const { status } = error.response;
                if (status === 401 || status === 403) {
        
                    await logOut();

                    // navigate to the login page
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

    }, [navigate, logOut]);

    return [axiosSecure];
};

export default useAxiosSecure;