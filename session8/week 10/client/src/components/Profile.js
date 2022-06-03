import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user, getAccessTokenSilently } = useAuth0();
  
 
  useEffect(() => {
    async function fetchUser() {
      const token = await getAccessTokenSilently({
        audience:"https://dev--tp9uy09.us.auth0.com/api/v2",
        scope: "openid",
      });
      console.log('profile ',token)
      try {
        const data = await fetch(`https://dev--tp9uy09.us.auth0.com/api/v2/users/${user.sub}`,{
          headers: { Authorization: `Bearer ${token}` }

        })
        console.log(data.status)
        if (data.status === 200) {
          const userData = await data.json();
          console.log("in use effect ", userData)

         }
      } catch (err) { console.log(err) }
    }

    fetchUser();
  }, [])
  return (
    <div>{JSON.stringify(user, null, 2)}</div>
  )
}
