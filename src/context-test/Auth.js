import React from 'react';
import {AuthContext, WrapperCom} from './Auth-Context';
 const Auth = () => {
const {login, logout, isLoggedIn} = React.useContext(AuthContext)
    return (
        <div>
        <p data-testid="hello">Hello</p>
        <WrapperCom>
        <div data-testid="isLoggedIn">{isLoggedIn.toString()}</div>
        <button data-testid="login" onClick={login}>login</button>
        <button data-testid="logout" onClick={logout}>logout</button>
        </WrapperCom>
        </div>

    )
}


export default Auth