
import LogoutButton from "./LogoutButton";
import { useState } from "react";
import SearchBar from './SearchBar.js';

const SideBar = () => {
  const avatars = [
    { id: 1, src: 'avatar1.jpg', name: 'John Doe' },
    // Add more avatar objects as needed
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 w-full px-6 py-8 flex flex-col justify-between">
        <div className="flex-grow overflow-y-auto hide-scrollbar scrollbar-visible" >
          <div className="flex items-center justify-between mb-10 sticky top-0">
            <div className="w-full md:w-64 px-4 py-2 rounded-lg text-gray-800">
              <SearchBar className="w-full" />
            </div>
          </div>
          <ul className="space-y-4">
            {avatars.map((avatar) => (
              <li
                key={avatar.id}
                className={`flex items-center cursor-pointer hover:bg-slate-700 space-x-4 ${selectedUser === avatar.id ? "bg-slate-700" : ""
                  }`}
                onClick={() => handleUserClick(avatar.id)}
              >
                <img className="w-10 h-10 rounded-full" src={avatar.src} alt="Avatar" />
                <span className="text-white">{avatar.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 sticky bottom-0">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default SideBar;