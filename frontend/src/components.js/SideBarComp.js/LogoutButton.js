import { TbLogout2 } from "react-icons/tb";

const LogoutButton = () => {
    return (
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            <TbLogout2 className="inline-block mr-2" />
            Logout
        </button>
    );
};

export default LogoutButton;