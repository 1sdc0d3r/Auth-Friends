import React, { useState } from "react";
// import { axiosWithAuth } from "../axiosAuth";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  const onChangeHandler = evt =>
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    });

  const onSubmitHandler = evt => {
    evt.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials).then(res => {
      console.log("login post", res);
      localStorage.setItem("token", res.data.payload);
      props.history.push("/friends");
    });
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={onChangeHandler}
        />
        <label>password: </label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={onChangeHandler}
        />
        <button type="submit">Login!</button>
      </form>
    </>
  );
};

export default Login;
