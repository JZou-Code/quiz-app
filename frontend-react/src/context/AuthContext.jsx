import React from "react";

const AuthContext = React.createContext({
    isLogin: false,
    username: '',
    email:'',
    setIsLogin:()=>{},
    setUsername: ()=>{},
    setEmail: ()=>{},
    login:  (payload) => {},
    logout: () => {},
});

export default AuthContext;
