import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";


const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        // Implement your logic to send the message
        console.log('Sending message:', message);
        setMessage(''); // Clear the input field after sending the message
    };

    return (
        <div className="w-full">
            <div className="flex">
                <input
                    type="text"
                    placeholder="Enter your message"
                    value={message}
                    onChange={handleMessageChange}
                    className="flex-grow text-white bg-gray-800 p-3 focus:outline-none"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white rounded-r-lg px-4 py-2 ml-2"
                >
                    <IoSend />
                </button>
            </div>
        </div>
    );
};

export default MessageInput;