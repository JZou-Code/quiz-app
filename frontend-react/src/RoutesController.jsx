import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import HomePage from "./pages/HomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import RankPage from "./pages/RankPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import SharePage from './pages/SharePage.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";

const RoutesController = () => {
    return (
        <div>
            <ErrorBoundary>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/rank' element={<RankPage/>}></Route>
                    <Route path="/share/:shareId" element={<SharePage />} />

                    <Route element={<PrivateRoute/>}>
                        <Route path='/quiz' element={<Outlet/>}>
                            <Route path='test' element={<QuizPage/>}></Route>
                            <Route path='result' element={<ResultPage/>}></Route>
                        </Route>
                    </Route>

                    <Route path='/account' element={<Outlet/>}>
                        <Route element={<PrivateRoute/>}>
                            <Route path='history' element={<AccountPage/>}></Route>
                            <Route path='profile' element={<ProfilePage/>}></Route>
                        </Route>

                        <Route path='login' element={<LoginPage/>}></Route>
                        <Route path='sign-up' element={<SignupPage/>}></Route>
                    </Route>
                </Routes>
            </ErrorBoundary>
        </div>
    );
};

export default RoutesController;
