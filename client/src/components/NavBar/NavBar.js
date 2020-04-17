import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
    const { isAuthenticated,loginWithPopup, logout } = useAuth0();

    return (
        <div className="navBar">
            {!isAuthenticated && (
                <button className="button2" onClick={() => loginWithPopup({})}>Log in</button>
            )}

            {isAuthenticated && <button className="button2" onClick={() => logout()}>Log out</button>}
            {isAuthenticated && (
                <span>

                    <Link to="/">
                        <button className="button2" >Home</button>
                        </Link>  
                </span>
            )}
        </div>
    );
};

export default NavBar;