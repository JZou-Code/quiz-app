import React from "react";

const AuthContext = React.createContext({
    isLogin: false,
    username: '',
    setIsLogin:()=>{},
    setUsername: ()=>{},
    login:  (payload) => {},
    logout: () => {},
});

export default AuthContext;
