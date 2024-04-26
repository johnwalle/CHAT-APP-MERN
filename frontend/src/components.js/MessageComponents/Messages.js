import React from 'react';

const Messages = ({ messages }) => {
    return (
        <div className="bg-white p-4">
            {messages.map((message) => (
                <div key={message.id} className="flex items-center justify-end space-x-2">
                    <img className="w-8 h-8 rounded-full" src={message.senderAvatar} alt="Sender Avatar" />
                    <div className="bg-blue-200 p-2 rounded-lg">
                        <span className="font-bold">{message.content}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Messages;
