import MessageInput from 'components/MessageInput';
import { MessageList } from 'components/MessageList';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const HomePage = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    // uuid is used library to generate unique IDs
    // ID field is added to:
    // 1. use it as a key in MessageList component
    // 2. use to create edit and delete functions
    const newMessage = {
      id: uuidv4(),
      title: message,
    };
    setMessages([newMessage, ...messages]);
  };
  return (
    <div className="p-5">
      <h1 className="text-center">Welcome Examiner!</h1>
      <div className="mt-5 mb-3">
        <MessageInput addMessage={addMessage} />
      </div>
      <MessageList messages={messages} />
    </div>
  );
};

export default HomePage;
