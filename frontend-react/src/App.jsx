import React from "react";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import Header from "./components/Header.jsx";
import useAuth from './hooks/useAuth.js';
import {AuthProvider} from "./context/AuthContext.jsx";
import Guidelines from "./pages/Guidelines.jsx";
import TopCorner from "./pages/TopCorner.jsx";
import SignupPage from './pages/SignupPage.jsx';
import Announcement from "./pages/Announcement.jsx";
import classes from './style/App.module.css'

function AppContent() {
    const {showLoginModal, closeLoginModal, showSignupModal, closeSignupModal} = useAuth();
    return (
        <div className={classes.Body}>
            <Header/>
            <Routes>
                <Route path='/' element={<WelcomePage/>}></Route>
                <Route path='/guidelines' element={<Guidelines/>}></Route>
                <Route path='/announcement' element={<Announcement/>}></Route>
                <Route path='/quiz'>
                    <Route path='test' element={<QuizPage/>}></Route>
                </Route>
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
