import React, {useCallback, useEffect, useRef, useState} from 'react';
import AuthContext from "./AuthContext.jsx";
import {setupAuthInterceptors} from "../utils/setupAxios.js";

export default function AuthProvider({children}) {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const name = localStorage.getItem('username') || '';
        if (token) {
            setIsLogin(true);
            setUsername(name);
        }
    }, []);

    const login = useCallback(({token, username}) => {
        if (token) {
            localStorage.setItem('access_token', token)
        }
        if (username) {
            localStorage.setItem('username', username)
        }
        setIsLogin(true);
        if (username) {
            setUsername(username)
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        setIsLogin(false);
        setUsername('');
        window.location.assign('/account/login');
    }, []);

    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            return
        }
        didMount.current = true;
        setupAuthInterceptors({logout});
    }, [logout]);

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                username,
                setIsLogin,
                setUsername,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
