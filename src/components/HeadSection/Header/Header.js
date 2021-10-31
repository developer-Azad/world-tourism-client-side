import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    
const element = <FontAwesomeIcon icon={faPlaneDeparture} />
    return (
            <div className="navbar">
            <div className="header-icon mx-6">
               <Link to="/home"> <p className="text-3xl">{element} </p></Link>
               <Link to="/home"> 
                <h3 className="text-2xl font-bold">W-Tour</h3> </Link>
            </div>
            <div className="nav-link">
            <Link to="/home">Home</Link>
            {
                user.email ? 
                <div>
                <Link to="/addNewService">Add Service</Link>
                <Link to="/myorders">My Orders </Link> 
                <Link to="/allorders">Manage All Orders </Link> 
                </div>
                : ''
            }
            
            </div>
            <div>
            {
                user.email ? 
                <button className="logOut-btn" 
                onClick={logOut}>Signed : {user.displayName} <span className="text-danger fw-bold">Log Out</span></button>
                : <Link to="/login">Login </Link>
                }
            </div>
        </div>
    );
};

export default Header;