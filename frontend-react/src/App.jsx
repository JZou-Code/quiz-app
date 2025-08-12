import React from "react";
import classes from './style/App.module.css'
import RoutesController from "./RoutesController.jsx";
import PageStateProvider from "./context/PageStateProvider.jsx";
import QuizProvider from "./context/QuizProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import SharePage from "./pages/SharePage.jsx";

function App() {
    return (
        <AuthProvider>
            <QuizProvider>
                <PageStateProvider>
                    <div className={classes.Body}>
                        <RoutesController/>
                    </div>
                </PageStateProvider>
            </QuizProvider>
        </AuthProvider>
    )
}

export default App
