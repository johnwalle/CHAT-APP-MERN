import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuthContext();

    const logout = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_AUTH}/logout`);
            if (response.status === 200) {
                // Dispatch the logout action
                // dispatch({ type: "LOGOUT" });

                // Remove the user from local storage
                localStorage.removeItem('user');

                // the context
                setUser(null);
            }
        } catch (error) {
            console.error("error while logging out", error);
        }
        setIsLoading(false);
    };

    return {
        logout,
        isLoading
    };
};

export default useLogout;