import React, {useContext} from 'react';
import QuizContext from "../context/QuizContext.jsx";

const ResultPage = () => {
    const ctx = useContext(QuizContext);

    return (
        <div>
            Result Page {ctx.score}
        </div>
    );
};

export default ResultPage;