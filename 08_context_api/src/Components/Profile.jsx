import React, { useContext } from 'react'
import UserContextApi from '../context/UserContextApi'

function Profile() {

    const { user } = useContext(UserContextApi);
    if (!user) return (<div>Please login!</div>)

    return (
        <div>
            Welcome {user.username} !!
        </div>
    )
}

export default Profile