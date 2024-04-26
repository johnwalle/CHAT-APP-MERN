import React from 'react';

const MessageAuthors = ({ currentUser }) => {
    return (
        <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={currentUser.src} alt="Avatar" />
            <p className="text-white text-lg">{currentUser.name}</p>
        </div>
    );
};

export default MessageAuthors;