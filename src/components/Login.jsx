import React, { useState } from "react";
import "./login.css";

export const Login = () => {
  const [name, setName] = useState("Login");
  return (
    <div className="container">
      <div className="header">{name}</div>
      <div className="loginpage">
        {name === "Signup" ? (
          <input type="text" placeholder="Name" />
        ) : (
          <div></div>
        )}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="submitcontainer">
        <button
          className={name === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setName("Signup");
          }}
        >
          Signup
        </button>
        <button
          className={name === "Signup" ? "submit gray" : "submit"}
          onClick={() => {
            setName("Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
