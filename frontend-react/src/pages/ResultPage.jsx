import React from 'react';
import {useLocation} from "react-router-dom";

const ResultPage = () => {
    const {state} = useLocation();
    const {score} = state || {score: 0};
    return (
        <div>
            Your Score : {score}
        </div>
    );
};

export default ResultPage;