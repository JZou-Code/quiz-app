import React, {useState} from 'react';
import AuthContext from "./AuthContext.jsx";

export default function AuthProvider({children}) {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('Kidd');
    const [email, setEmail] = useState('');

    return (
        <AuthContext.Provider
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
        </AuthContext.Provider>
    );
}
