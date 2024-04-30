import React from 'react';
import ChatWindow from './ChatWindow';
import FriendList from './FriendList';
import MessageInput from './MessageInput';
import '../styles/main.scss';

const MessengerApp = () => {


  return (
    <div className="messenger-app">
     
      <ChatWindow  />
      <div className='flex-col'>
      <FriendList />
      <MessageInput  />
      </div>
  
    </div>
  );
};

export default MessengerApp;
