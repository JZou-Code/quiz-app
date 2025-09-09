import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import classes from '../style/Header.module.css'
import HeaderLogin from "./HeaderLogin.jsx";
import AuthContext from "../context/AuthContext.jsx";
import HeaderAccount from "./HeaderAccount.jsx";


const Header = () => {
    const ctx = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <div className={classes.Container}>
                <div className={classes.TitleArea}>

                    <div
                        onClick={()=>{navigate('/')}}
                        className={classes.TitleContainer}>
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
                    {/*    to='/rank' end>*/}
                    {/*    Share*/}
                    {/*</NavLink>*/}
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/account/history' end>
                        History
                    </NavLink>
                    <NavLink
                        className={({isActive}) => isActive ?
                            `${classes.Active} ${classes.Link}` : classes.Link}
                        to='/account/profile' end>
                        Profile
                    </NavLink>
                </div>

            </div>
        </>
    );
};

export default Header;
