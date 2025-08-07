import React from "react";

const AccountContext = React.createContext({
    isLogin: false,
    username: '',
    email: '',
    setIsLogin:()=>{},
    setUsername: ()=>{},
    setEmail:()=>{}
});

export default AccountContext;
