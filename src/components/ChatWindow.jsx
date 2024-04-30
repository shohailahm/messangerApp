import React from 'react';
import useFriendsStore from '../store/messages';
import { useShallow } from 'zustand/react/shallow'

const ChatWindow = () => {
    const { messages,activeFriend } = useFriendsStore(
        useShallow((state) => ({  messages: state.messages,activeFriend:state.activeFriend })),
      )
    
  return (
    <div className="chat-window">
      <h2>Chat with {activeFriend.name}</h2>
      {
        messages && messages.length>0 && messages.filter((msg)=> msg.to===activeFriend.id).map(({message,from},index)=>(
            <div key={index} className='message-container'>
                {from ? from :'you'} : {message}
            </div>
        ))
      }
    </div>
  );
};

export default ChatWindow;
