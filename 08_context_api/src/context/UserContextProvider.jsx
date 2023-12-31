import React, { useState } from "react";
import UserContextApi from "./UserContextApi";


const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    });
    return (
        <UserContextApi.Provider
            value={{ user, setUser }}
        >
            {children}
        </UserContextApi.Provider>
    )
}

export default UserContextProvider;