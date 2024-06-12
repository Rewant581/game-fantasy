// src/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import logo from "../Images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            <Link to="/home">
                <img src={logo} alt="Winner Go Logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/cricket">Cricket</a></li>
                <li><a href="/football">Football</a></li>
                <li><a href="/basketball">Basketball</a></li>
                <li><a href="/baseball">Baseball</a></li>
            </ul>
            <div className="navbar-auth">
                <a href="/login">Login</a> | <a href="/register">Register</a>
            </div>
        </nav>
    );
};

export default Navbar;
