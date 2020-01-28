import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosAuth";
import { Friend } from "./Friend";

const FriendsList = props => {
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
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        console.log("add", res);
        getFriends();
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    console.log("getFriendsTest");
    getFriends();
  }, []);

  return (
    <div>
      friendList
      {friends.map(e => {
        return <Friend key={e.id} friend={e} />;
      })}
    </div>
  );
};

export default FriendsList;
