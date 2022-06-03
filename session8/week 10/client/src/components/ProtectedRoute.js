import { withAuthenticationRequired } from '@auth0/auth0-react'
 
export default function ProtectedRoute({ component }) {
    const Component = withAuthenticationRequired (component)  
  return (
  <Component />
  
)}
