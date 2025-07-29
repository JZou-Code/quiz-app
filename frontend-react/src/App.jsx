import React from "react";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import Header from "./components/Header.jsx";
import useAuth from './hooks/useAuth.js'; 
import { AuthProvider } from "./context/AuthContext.jsx";
import Guidelines from "./pages/Guidelines.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from './pages/SignupPage.jsx'; 

function AppContent() {
  const {showLoginModal, closeLoginModal, showSignupModal, closeSignupModal} = useAuth(); 
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<WelcomePage/>}></Route>
                <Route path='/quiz'>
                    <Route path='test' element={<QuizPage/>}></Route>
                    <Route path='result' element={<ResultPage/>}></Route>
                    <Route path='guidelines' element={<Guidelines/>}></Route>
                </Route>
            </Routes>
            {showLoginModal && <LoginPage onClose={closeLoginModal} /> }
            {showSignupModal && <SignupPage onClose={closeSignupModal} /> }
        </div>
    )
}

function App(){
  return(
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
