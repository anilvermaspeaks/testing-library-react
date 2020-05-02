import React, {useState} from 'react';


//create context
export const AuthContext = React.createContext({});



export const  WrapperCom = ({children}) => {
const [isLoggedIn, setIsloggedIn] = useState("false")

const login =()=>{
    console.log("isLoggedIn", isLoggedIn)
    setIsloggedIn(true)
}

const logout =()=>{
    setIsloggedIn(false)
}


    return (
        <AuthContext.Provider
        value={{login, logout, isLoggedIn}}
        
        >
            {children}
        </AuthContext.Provider>
    )
}






