import React, {useState} from 'react';
import classes from '../style/LoginForm.module.css'

const SignupForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        onSubmit({name, email, password});
    };

    return (
        <>
            <form className={classes.FormContainer} onSubmit={handleSubmit}>
                <div className={classes.Title}>Sign Up</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={'Username'}
                    />
                </div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder={'Email'}
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
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder={'Confirm Password'}
                    />
                </div>
                <button className={classes.Button} type="submit">Sign Up</button>
            </form>
            <div className={classes.Notification}>
                <div className={classes.LinkContainer}>
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={() => props.onSetStatus(props.statusObj.LOGIN)} className={classes.Link}>
                        &nbsp;Login
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupForm;
