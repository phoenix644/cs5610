import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function NavigationWithBS() {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Navbar.Toggle />
            <Navbar.Collapse  >
                <Nav className="ms-auto">
                    <Nav.Item>
                    <Nav.Link  as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
                    <Nav.Link  as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Item>                    {!isAuthenticated ?
                        <LoginButton /> :
                        <LogoutButton />}
                    </Nav.Item>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
