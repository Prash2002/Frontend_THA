import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../context/LoginContext";

const Nav = () => {
  const { state } = useContext(Context);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Frontend_THA/day-24/build/">Home</Link>
        </li>
        <li>
          <Link to="/Frontend_THA/day-24/build/about">About</Link>
        </li>

        <li>
          {state.loggedin ? (
            <Link to="/Frontend_THA/day-24/build/profile"> Profile</Link>
          ) : (
            <Link to="/Frontend_THA/day-24/build/"> Profile</Link>
          )}
        </li>
        <li>
          {state.loggedin ? (
            <Link to="/Frontend_THA/day-24/build/dashboard">Dashboard</Link>
          ) : (
            <Link to="/Frontend_THA/day-24/build/"> Dashboard</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
