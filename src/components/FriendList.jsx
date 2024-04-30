import React from "react";
import "../styles/main.scss";
import useFriendsStore from "../store/messages";
import { useShallow } from "zustand/react/shallow";
import '../styles/main.scss';

const FriendList = () => {
  const {
    friendsList: friends,
    activeFriend,
    setActiveFriend,
  } = useFriendsStore(
    useShallow((state) => ({
      friendsList: state.friendsList,
      activeFriend: state.activeFriend,
      setActiveFriend: state.setActiveFriend,
    }))
  );

  return (
    <div className="friend-list">
      {!activeFriend.id && (
        <span className="warning">
          Please select a friend to start chatting
        </span>
      )}
      <h2>Friends</h2>

      <select
        className="select"
        placeHolder="Select Friend"
        onChange={(event) =>{
          setActiveFriend(
            friends.find((friend) => { 
            return  friend.id == event.target.value
            })
          )
        }
        }
      >
        <option disabled>Select</option>
        {friends?.map((friend, _index) => (
          <option
            key={friend?.id}
            value={friend?.id}
            selected={activeFriend?.id === friend.id}
          >
            {friend?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FriendList;
