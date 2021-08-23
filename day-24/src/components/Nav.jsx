import {Link} from "react-router-dom";
import React, {useContext} from 'react'
import { Context } from "../context/LoginContext";

const Nav = () => {
    const {state} = useContext(Context);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                
                <li>
                    {
                        state.loggedin? 
                            <Link to="/profile"> Profile</Link> : 
                            <Link to="/"> Profile</Link>
                    }
                </li>
                <li>
                    {
                        state.loggedin? 
                            <Link to="/dashboard">Dashboard</Link>: 
                            <Link to="/"> Dashboard</Link>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Nav
