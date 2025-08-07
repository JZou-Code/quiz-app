import React from "react";

const AuthContext = React.createContext({
    isLogin: false,
    username: '',
    email: '',
    setIsLogin:()=>{},
    setUsername: ()=>{},
    setEmail:()=>{}
});

export default AuthContext;
