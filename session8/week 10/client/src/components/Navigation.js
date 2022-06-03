import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton'
import { FaBars, FaTimes } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const { isAuthenticated } = useAuth0();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth =
            () => {
                setScreenWidth(window.innerWidth)
            }
        window.addEventListener("resize", changeWidth)

        return () => { window.removeEventListener("resize", changeWidth) }
    },
        []);
    return (
        <div >
            <div className="menu-icon" onClick={() => { setShowMenu(!showMenu) }}>{showMenu ? <FaTimes /> : <FaBars />}</div>
             {(showMenu || screenWidth)  && 
                <div className="nav-list ">
                    <Link to="/">Home</Link>
                    <Link to="/tasks">Tasks</Link>
                    <a href="/profile">Profile</a>
                    {!isAuthenticated ?
                        <LoginButton /> :
                        <LogoutButton />}
                </div>
            } 
        </div>
    )
}
