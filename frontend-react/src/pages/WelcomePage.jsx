import React from 'react';
import SearchSidebar from '../components/SearchSidebar';
import QuizCard from '../components/QuizCard';

const WelcomePage = () => {
  const quizzes = ['COMPX Test', 'Mental Health Test', 'GEO Testing', 'Green Gorilla Quiz'];
    return (
        <div style={{display: 'flex', padding: '2rem'}}>
          <div style={{flex: 3}}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {quizzes.map((title,idx)=>(
                <QuizCard key = {idx} title = {title}/>
              ))}
            </div>
          </div>

          <div style={{flex: 1, marginLeft: '2rem'}}> 
            <SearchSidebar />
          </div>
        </div>
    );
};

export default WelcomePage;