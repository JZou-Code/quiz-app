import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';
import {NavLink} from "react-router-dom";
import classes from '../style/Header.module.css'
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import TopCorner from "../pages/TopCorner.jsx";


const Header = () => {
    const {isAuthenticated, user, openLoginModal, logout, openSignupModal} = useAuth();
    const statusObj = {
        NONE: -1,
        LOGIN: 0,
        SIGNUP: 1
    }
    const [status, setStatus] = useState(-1);

    const onLogIn = () => {
        setStatus(statusObj.LOGIN);
    }

    const onSignUp = () => {
        setStatus(statusObj.SIGNUP);
    }

    const onClose = ()=>{
        setStatus(statusObj.NONE)
    }

    return (
        <>
            <div className={classes.Container}>
                <div className={classes.TitleArea}>

                    <div>
                        <div className={classes.Title}>Online Quiz</div>
                    </div>

                    <div className={classes.LoginContainer}>
                        {/*          {isAuthenticated ? (*/}
                        {/*              <span>*/}
                        {/*  {user.name}*/}
                        {/*                  <button onClick={logout}>Logout</button>*/}
                        {/*</span>*/}
                        {/*          ) : (*/}
                        {/*              <>*/}
                        {/*                  <button onClick={openLoginModal}>Login</button>*/}
                        {/*                  <button onClick={openSignupModal}>Sign up</button>*/}
                        {/*              </>*/}
                        {/*          )}*/}

                        <div className={`${classes.Button} ${classes.Login}`} onClick={onLogIn}>Log In</div>
                        <div className={`${classes.Button} ${classes.SignUp}`} onClick={onSignUp}>Sign Up</div>
                    </div>

                </div>

                <div className={classes.LinkContainer}>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/' end>
                        Home
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/guidelines' end>
                        Guidelines
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/announcement' end>
                        Announcement
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/quiz/test' end>
                        Quiz
                    </NavLink>
                </div>

            </div>
            {
                status !== statusObj.NONE?
                    <Backdrop>
                        <TopCorner status={status} onClose={onClose} onSetStatus={setStatus}></TopCorner>
                    </Backdrop>:
                    ''
            }

        </>
    );
};

export default Header;