import React, {useContext, useEffect, useState} from 'react';
import classes from '../style/LoginImageContainer.module.css'
import PageStateContext from "../context/PageStateContext.jsx";
import {pageState} from "../utils/pageState.js";

const LoginImageContainer = () => {
    const [pageContent, setPageContent] = useState({});
    const ctx = useContext(PageStateContext);

    const contents = [
        {
            srcImg: '/sign-up-image.png',
            title: 'Come join us!',
            message: 'Join SciQ Insight and sharpen your science reasoning with structured quizzes and real-time feedback.'
        },
        {
            srcImg: '/login-image.png',
            title: 'Welcome back!',
            message: 'Good to see you again! Let\'s continue sharpening your science reasoning.'
        }
    ]

    useEffect(() => {
        ctx.state === pageState.SIGNUP ? setPageContent(contents[0]) : setPageContent(contents[1]);
    }, [ctx.state]);

    console.log(pageContent)

    return (
        <div className={classes.Container}>
            <div className={classes.ImageBox}>
                <img src={pageContent.srcImg}/>
            </div>
            <div className={classes.ImageTitle}>
                {pageContent.title}
            </div>
            <div className={classes.ImageText}>
                {pageContent.message}
            </div>
            {
                ctx.state === pageState.SIGNUP ?
                    <div className={classes.TransferContainer}>
                        <div className={classes.LinkText}>
                            Already have an account?&nbsp;
                        </div>
                        <div
                            onClick={() => ctx.dispatch({type: pageState.LOGIN})}
                            className={classes.Link}>
                            Login
                        </div>
                    </div>
                    :
                    <div className={classes.TransferContainer}>
                        <div className={classes.LinkText}>
                            Don't have an account?&nbsp;
                        </div>
                        <div
                            onClick={() => ctx.dispatch({type: pageState.SIGNUP})}
                            className={classes.Link}>
                            Sign up
                        </div>
                    </div>
            }
        </div>
    );
};

export default LoginImageContainer;
