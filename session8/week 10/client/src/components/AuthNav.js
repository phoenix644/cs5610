import React from 'react'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
export default function AuthNav() {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated)
    return (
        <>
            {!isAuthenticated ?
                <LoginButton /> :
                <LogoutButton />}
        </>
    )
}
