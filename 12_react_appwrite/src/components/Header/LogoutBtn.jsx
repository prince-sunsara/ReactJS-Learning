import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch(err => console.log(err))
    }
    return (
        <button
            className='inline-block rounded-full px-6 py-2 duration-200 hover:bg-blue-100'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn;