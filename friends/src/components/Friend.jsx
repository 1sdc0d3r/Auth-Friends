import React, { useState } from "react";

export const Friend = ({ friend, remove, editFriend }) => {
  //   console.log(friend);
  const [edit, setEdit] = useState({
    editing: false,
    id: friend.id,
    name: friend.name,
    email: friend.email,
    age: friend.age
  });

  const onChangeHandler = evt => {
    setEdit({
      ...edit,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    setEdit({
      ...edit,
      editing: false
    });
    const newFriend = {
      id: edit.id,
      name: edit.name,
      email: edit.email,
      age: edit.age
    };
    editFriend(newFriend);
  };

  if (!edit.editing) {
    return (
      <div className="friend">
        <p className="friend-name">{friend.name}</p>
        <p className="friend-email">{friend.email}</p>
        <p className="friend-age">{friend.age}</p>
        <div className="btn-div">
          <button
            onClick={() =>
              setEdit({
                ...edit,
                editing: true
              })
            }
          >
            Edit
          </button>
          <button onClick={() => remove(friend)}>Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <form onSubmit={onSubmitHandler}>
        <label>name: </label>
        <input
          type="text"
          name="name"
          value={edit.name}
          onChange={onChangeHandler}
        />
        <label>age: </label>
        <input
          type="text"
          name="age"
          value={edit.age}
          onChange={onChangeHandler}
        />
        <label>email: </label>
        <input
          type="text"
          name="email"
          value={edit.email}
          onChange={onChangeHandler}
        />
        <button type="submit">Submit Edit!</button>
      </form>
    );
  }
};
