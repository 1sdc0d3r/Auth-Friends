import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosAuth";
import { Friend } from "./Friend";
import { NewFriendForm } from "./NewFriendFrom";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("getFriends", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  const addFriend = friend => {
    console.log("add", friend);
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => getFriends())
      .catch(err => console.log(err));
  };

  const removeFriend = friend => {
    axiosWithAuth()
      .delete(`/friends/${friend.id}`)
      .then(res => getFriends())
      .catch(err => console.log(err));
  };

  const editFriend = friend => {
    console.log("put edit", friend);
    axiosWithAuth().put(`/friends/${friend.id}`, friend);
    getFriends();
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      <NewFriendForm add={addFriend} />
      <div className="friend-list">
        {friends.map(e => {
          return (
            
            <Friend
              key={e.id}
              friend={e}
              remove={removeFriend}
              editFriend={editFriend}
            />
          );
        })}
      </div>
    </>
  );
};

export default FriendsList;
