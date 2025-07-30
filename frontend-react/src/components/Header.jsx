import React from 'react';
import useAuth from '../hooks/useAuth';
import {NavLink} from "react-router-dom";
import classes from '../style/Header.module.css'


const Header = () => {
    const {isAuthenticated, user, openLoginModal, logout, openSignupModal} = useAuth();

    return (
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

                    <div className={`${classes.Button} ${classes.Login}`} onClick={openSignupModal}>Log In</div>
                    <div className={`${classes.Button} ${classes.SignUp}`} onClick={openLoginModal}>Sign Up</div>
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
    );
};

export default Header;