import React, { useState } from 'react';
import '../styles/main.scss';
import useFriendsStore from '../store/messages';
import { useShallow } from 'zustand/react/shallow'

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const { activeFriend } = useFriendsStore(
    useShallow((state) => ({  activeFriend: state.activeFriend })),
  )

  const saveMessage = useFriendsStore((state)=>state.addMessages)

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Send message logic here
    console.log(`Message sent to ${activeFriend?.name}: ${message}`);
    saveMessage({message:message,to:activeFriend.id})
    setMessage('');
  };

  return (
    <div className="message-input">
    {activeFriend?.id ? 
    <>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder={`Message ${activeFriend.name}`}
      />
      <button onClick={sendMessage}>Send</button>
      </>
    :null }
    </div>
  );
};

export default MessageInput;
