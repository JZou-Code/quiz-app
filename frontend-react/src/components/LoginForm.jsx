import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';
import classes from "../style/LoginForm.module.css";

const LoginForm = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {login, openSignupModal} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(name);
    }

    return (
        <>
            <form className={classes.FormContainer} onSubmit={handleSubmit} style={{marginTop:'1.5rem'}}>
                <div className={classes.Title}>User Login</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={'Username'}
                    />
                </div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder={'Password'}
                    />
                </div>
                <button className={classes.Button} type='sumbit'>Login</button>
            </form>
            <div className={classes.Notification}>
                <div className={classes.Forget}>
                <span className={classes.Link}>
                    Forgot password?
                </span>
                </div>
                <div className={classes.LinkContainer}>
                    <div>
                        Not registered yet?
                    </div>
                    <div onClick={() => props.onSetStatus(props.statusObj.SIGNUP)} className={classes.Link}>
                        &nbsp;Signup for an account
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;