import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import RankPage from "./pages/RankPage.jsx";

const RoutesController = () => {
    return (
        <div>
            <ErrorBoundary>
                <Routes>
                    <Route path='/' element={<WelcomePage/>}></Route>
                    <Route path='/rank' element={<RankPage/>}></Route>
                    <Route path='/quiz' element={<Outlet/>}>
                        <Route path='test' element={<QuizPage/>}></Route>
                        <Route path='result' element={<ResultPage/>}></Route>
                    </Route>
                    <Route path='/account' element={
                            <Outlet/>
                    }>
                        <Route path='detail' element={<DetailPage/>}></Route>
                        <Route path='login' element={<LoginPage/>}></Route>
                        <Route path='sign-up' element={<LoginPage/>}></Route>
                    </Route>
                </Routes>
            </ErrorBoundary>
        </div>
    );
};

export default RoutesController;
