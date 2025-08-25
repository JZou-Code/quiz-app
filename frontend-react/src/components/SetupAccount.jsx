import classes from '../style/LoginPage.module.css'
import FormContainer from "./FormContainer.jsx";
import LoginImageContainer from "./LoginImageContainer.jsx";


const SetupAccount = () => {

    return (
        <div className={classes.Outer}>
            <div className={classes.Container}>
                <div className={classes.FormContainer}>
                    <FormContainer/>
                </div>
                <div className={classes.AnimContainer}>
                    <LoginImageContainer/>
                </div>
            </div>
        </div>

    );
};

export default SetupAccount;
