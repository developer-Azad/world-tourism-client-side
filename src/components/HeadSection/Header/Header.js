import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
            <div className="navbar">
            <div className="header-icon">
               <Link to="/home"> 
                <h3 className="text-2xl font-bold">W-Tour</h3> </Link>
            </div>
            <div className="nav-link">
            <Link to="/home">Home</Link>
            <Link to="/addNewService">Add Service</Link>
            <Link to="/myorders">My Orders </Link>
            </div>
            <div>
            {
                user.email ? 
                <button className="logOut-btn" 
                onClick={logOut}>Signed : {user.displayName} <span className="text-warning fw-bold">Log Out</span></button>
                : <Link to="/login">Login </Link>
                }
            </div>
        </div>
    );
};

export default Header;