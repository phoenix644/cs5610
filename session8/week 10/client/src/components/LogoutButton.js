import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button'

export default function LogoutButton() {
    const {logout}
 = useAuth0();
   return (
    <Button onClick={() => logout({returnTo: "http://localhost:3000"})}>Logout</Button>
  )
}
