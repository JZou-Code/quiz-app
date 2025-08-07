import React from "react";
import classes from './style/App.module.css'
import RoutesController from "./RoutesController.jsx";
import Header from "./components/Header.jsx";
import PageStateProvider from "./context/PageStateProvider.jsx";
import QuizProvider from "./context/QuizProvider.jsx";
import AccountProvider from "./context/AccountProvider.jsx";


function App() {
    return (
        <AccountProvider>
            <QuizProvider>
                <PageStateProvider>
                    <div className={classes.Container}>
                        <RoutesController/>
                    </div>
                </PageStateProvider>
            </QuizProvider>
        </AccountProvider>
    )
}

export default App
