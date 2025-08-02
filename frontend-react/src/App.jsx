import React from "react";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import Header from "./components/Header.jsx";
import useAuth from './hooks/useAuth.js';
import {AuthProvider} from "./context/AuthContext.jsx";
import Rank from "./pages/./Rank.jsx";
import TopCorner from "./pages/TopCorner.jsx";
import SignupPage from './pages/SignupPage.jsx';
import Announcement from "./pages/Announcement.jsx";
import classes from './style/App.module.css'
import AccountPage from "./pages/AccountPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import QuizProvider from "./context/QuizProvider.jsx";

function AppContent() {
    const {showLoginModal, closeLoginModal, showSignupModal, closeSignupModal} = useAuth();
    return (
        <div className={classes.Body}>
            {/*<Header/>*/}
            <Routes>
                <Route path='/' element={<WelcomePage/>}></Route>
                <Route path='/rank' element={<Rank/>}></Route>
                {/*<Route path='/announcement' element={<Announcement/>}></Route>*/}
                <Route path='/quiz'>
                    <Route path='test' element={
                        <QuizProvider>
                            <QuizPage/>
                        </QuizProvider>
                    }></Route>
                    <Route path='result' element={
                        <QuizProvider>
                            <ResultPage/>
                        </QuizProvider>
                    }></Route>
                </Route>
                <Route path='/account' element={<AccountPage/>}></Route>
            </Routes>
            {showLoginModal && <TopCorner onClose={closeLoginModal}/>}
            {showSignupModal && <SignupPage onClose={closeSignupModal}/>}
        </div>
    )
}

function App() {
    return (
        <AuthProvider>
            <AppContent/>
        </AuthProvider>
    )
}

export default App
