import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthContext } from './useAuthContext';

const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();
    const { setUser } = useAuthContext();

    const register = async (username, fullName, password, confirmPassword, gender, setConfirmPassword, setFullName, setGender, setPassword, setUsername) => {
        setIsLoading(true);

        try {
            // Validate passwords
            if (password !== confirmPassword) {
                toast.error('Passwords do not match.');
                setIsLoading(false);
                return;
            }
            if (password.length < 6) {
                toast.error('Password must be at least 6 characters long.');
                setIsLoading(false);
                return;
            }

            //
            // Make API request with proper body structure (adjust based on your API)
            const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/signup`, {
                username,
                fullName,
                password,
                confirmPassword,
                gender,
            });

            const userData = response.data;

            if (response.status === 200) {
                // Check for success status code
                setUsername('')
                setPassword('')
                setFullName("")
                setConfirmPassword("")
                setGender("");

                // Dispatch login action or handle successful registration (e.g., redirect)
                // dispatch({ type: 'LOGIN', payload: userData })

                // store the user  in the localstorage
                localStorage.setItem('user', JSON.stringify(userData));

                // context
                setUser(userData)

                // navigate('/');
                console.log('User registered:', userData);
            }
        } catch (error) {
            console.error('Registration error:', error);
            toast.error(error.response?.data?.error || 'error while registeration , please try again.')
        }

        setIsLoading(false);
    };

    return { register, isLoading };
};

export default useRegister;