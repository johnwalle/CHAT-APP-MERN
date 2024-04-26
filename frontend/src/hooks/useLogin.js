import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (username, password, setUsername, setPassword) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/login`, {
                username,
                password
            });

            const userData = response.data;

            if (response.status === 200) {
                console.log("user", userData);
                setUsername('');
                setPassword('');
                navigate('/');
                // Dispatch login action or perform any necessary operations
                // Store user data in local storage or state
            }
        } catch (error) {
            console.error("error while logging", error);
            toast.error(error.response?.data?.message || 'Error while logging in.');
        }
        setIsLoading(false);
    };

    return {
        login,
        isLoading
    };
};

export default useLogin;