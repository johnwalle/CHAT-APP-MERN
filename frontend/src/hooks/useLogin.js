import axios from 'axios'
import { useState } from 'react'

const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const login = async (username, password) => {
        setIsLoading(true)
        try {
            const response = await axios.post(`${process.env.REACT_API_AUTH}/login`, username, password)
            const userData = response.data

            if (response.data === 200) {
                console.log("user", userData)
                //dispatch login d

                // storage in the local storage
            }
        } catch (error) {
            console.error(error.response.data.message)
            setError(error.response.data.message || 'error while registering the user.')
        }
        setIsLoading(false)

    }


    return {
        login, error, isLoading
    }
}

export default useLogin
