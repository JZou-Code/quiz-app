import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import classes from '../style/Header.module.css'
import {pageState} from "../utils/pageState.js";
import PageStateContext from "../context/PageStateContext.jsx";


const Header = () => {
    const ctx = useContext(PageStateContext);
    const navigate = useNavigate();

    return (
        <>
            <div className={classes.Container}>
                <div className={classes.TitleArea}>

                    <div>
                        <div className={classes.Title}>Online Quiz</div>
                    </div>
                    <div className={classes.LoginContainer}>
                        <div className={`${classes.Button} ${classes.Login}`}
                             onClick={() => {
                                 ctx.dispatch({type: pageState.LOGIN});
                                 navigate('/account/login');
                             }}>Log In
                        </div>
                        <div className={`${classes.Button} ${classes.SignUp}`}
                             onClick={() => {
                                 ctx.dispatch({type: pageState.SIGNUP});
                                 navigate('/account/sign-up');
                             }}>Sign Up
                        </div>
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
                        to='/Rank' end>
                        Rank
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/quiz/test' end>
                        Quiz
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/account/detail' end>
                        Account
                    </NavLink>
                </div>

            </div>
        </>
    );
};

export default Header;
