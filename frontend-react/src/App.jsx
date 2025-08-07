import React from "react";
import classes from './style/App.module.css'
import RoutesController from "./RoutesController.jsx";
import Header from "./components/Header.jsx";
import PageStateProvider from "./context/PageStateProvider.jsx";
import QuizProvider from "./context/QuizProvider.jsx";


function App() {
    return (
        <QuizProvider>
            <PageStateProvider>
                <div className={classes.Container}>
                    <RoutesController/>
                </div>
            </PageStateProvider>
        </QuizProvider>
    )
}

export default App
