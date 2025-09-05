import React, {useContext, useState} from 'react';
import Header from "../components/Header.jsx";
import classes from '../style/ProfilePage.module.css'
import AuthContext from "../context/AuthContext.jsx";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import ChangePassword from "../components/ChangePassword.jsx";

const ProfilePage = () => {
    const [isChanging, setIsChanging] = useState(false);

    const authCtx = useContext(AuthContext);

    const changePwdHandler = (e) => {
        setIsChanging(true);
    }

    const onCancel = () => {
        setIsChanging(false)
    }

    return (
        <>

            <div className={classes.Container}>
                <Header/>
                <div className={classes.BodyContent}>
                    <div className={classes.Title}>
                        My Profile
                    </div>

                    <div className={classes.Item}>
                        <div className={classes.ItemTitle}>
                            Username
                        </div>
                        <div className={classes.ItemContent}>
                            <div className={classes.Text}>
                                {authCtx.username}
                            </div>
                        </div>
                    </div>
                    <div className={classes.Item}>
                        <div className={classes.ItemTitle}>
                            Email
                        </div>
                        <div className={classes.ItemContent}>
                            <div className={classes.Text}>
                                {authCtx.email}
                            </div>
                        </div>
                    </div>
                    <div className={classes.Item}>
                        <div className={classes.ItemTitle}>
                            Password
                        </div>
                        <div className={classes.ItemContent}>
                            <div className={classes.Text}>
                                You can change your password here
                            </div>
                            <button
                                onClick={changePwdHandler}
                                className={classes.Button}>
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isChanging &&
                <Backdrop>
                    <ChangePassword onCancel={onCancel}/>
                </Backdrop>
            }
        </>
    );
};

export default ProfilePage;
