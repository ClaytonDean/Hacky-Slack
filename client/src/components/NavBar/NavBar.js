import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
    const { isAuthenticated,loginWithPopup, logout } = useAuth0();

    return (
        <div className="navBar">
            {!isAuthenticated && (
                <button onClick={() => loginWithPopup({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
            {isAuthenticated && (
                <span>

                    <Link to="/">
                        <button>Home</button>
                        </Link>  
                </span>
            )}
        </div>
    );
};

export default NavBar;