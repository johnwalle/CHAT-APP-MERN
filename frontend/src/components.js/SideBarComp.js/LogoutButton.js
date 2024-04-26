import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { logout, isLoading } = useLogout();

    const logoutHandler = async () => {
        await logout();
    };

    return (
        <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <div className="animate-spin">
                        <AiOutlineLoading3Quarters className="text-xl" />
                    </div>
                </div>
            ) : (
                <>
                    <TbLogout2 className="inline-block mr-2" />
                    Logout
                </>
            )}
        </button>
    );
};

export default LogoutButton;