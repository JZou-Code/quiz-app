import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import classes from '../style/Header.module.css'
import HeaderLogin from "./HeaderLogin.jsx";
import AuthContext from "../context/AuthContext.jsx";
import HeaderAccount from "./HeaderAccount.jsx";


const Header = () => {
    const ctx = useContext(AuthContext);

    return (
        <>
            <div className={classes.Container}>
                <div className={classes.TitleArea}>

                    <div className={classes.TitleContainer}>
                        <span className={classes.TitleLogo}>SciQ</span>
                        <span className={classes.TitleChunk}>Insight</span>
                    </div>
                    <div className={classes.Corner}>
                        {
                            ctx.isLogin ? <HeaderAccount/> : <HeaderLogin/>
                        }
                    </div>
                </div>

                <div className={classes.LinkContainer}>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/' end>
                        Home
                    </NavLink>
                    {/*<NavLink*/}
                    {/*    className={({isActive}) => isActive ?*/}
                    {/*        `${classes.Active} ${classes.Link}` : classes.Link}*/}
                    {/*    to='/Rank' end>*/}
                    {/*    Rank*/}
                    {/*</NavLink>*/}
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/quiz/test' end>
                        Quiz
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/account' end>
                        Account
                    </NavLink>
                </div>

            </div>
        </>
    );
};

export default Header;
