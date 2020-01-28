import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
