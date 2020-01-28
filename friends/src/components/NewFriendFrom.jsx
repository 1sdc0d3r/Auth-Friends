import React, { useState } from "react";

export const NewFriendForm = ({ add }) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: ""
  });

  const onChangeHandler = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    setValues({
      name: "",
      age: "",
      email: ""
    });
    if ((values.name && values.age) || values.email !== "") {
      add({
        id: Math.random(),
        name: values.name,
        age: values.age,
        email: values.email
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>name: </label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={onChangeHandler}
      />
      <label>age: </label>
      <input
        type="text"
        name="age"
        value={values.age}
        onChange={onChangeHandler}
      />
      <label>email: </label>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={onChangeHandler}
      />
      <button type="submit">Add Friend!</button>
    </form>
  );
};
