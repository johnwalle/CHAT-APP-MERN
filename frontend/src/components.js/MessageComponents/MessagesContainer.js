import React, { useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import MessageAuthors from './MessageAuthors';
import NoChatSelectedPage from './NoChatSelected';

const MessagesContainer = () => {
  const currentUser = {
    id: 1,
    src: 'avatar1.jpg',
    name: 'John Doe',
  };

  // Assuming you have a variable or state that contains the messages data
  const messages = [
    { id: 1, content: 'How you doing bro!', senderAvatar: 'jo' },
    // Add more message objects as needed
  ];

  const [chatSelected, setChatSelected] = useState(false);

  const handleChatSelection = () => {
    setChatSelected(true);
  };

  return (
    <div className="flex flex-col h-screen">
      {chatSelected ? (
        <>
          <div className="bg-gray-800 py-4 px-6 flex items-center justify-between">
            <MessageAuthors currentUser={currentUser} />
            {/* Add any additional elements or functionality for the top section */}
          </div>
          <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex flex-col-reverse">
              <Messages messages={messages} />
            </div>
          </div>
          <div className="bg-white p-1">
            <MessageInput />
          </div>
        </>
      ) : (
        <NoChatSelectedPage handleChatSelection={handleChatSelection} />
      )}
    </div>
  );
};

export default MessagesContainer;