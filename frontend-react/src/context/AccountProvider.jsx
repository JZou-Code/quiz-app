import React, {useState} from 'react';
import AccountContext from "./AccountContext.jsx";

export default function AccountProvider({children}) {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <AccountContext.Provider
            value={{
                isLogin,
                username,
                email,
                setIsLogin,
                setUsername,
                setEmail
            }}
        >
            {children}
        </AccountContext.Provider>
    );
}
