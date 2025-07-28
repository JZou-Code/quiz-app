import React from "react";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<WelcomePage/>}></Route>
                <Route path='/quiz'>
                    <Route path='test' element={<QuizPage/>}></Route>
                    <Route path='result' element={<ResultPage/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
