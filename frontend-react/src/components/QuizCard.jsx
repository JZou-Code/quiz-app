import React from 'react';

const QuizCard = ({title}) => {
    return (
        <div style={cardStyle}>
          {title}
        </div>
    );
};
const cardStyle = {
  width: '200px',
  height: '100px',
  backgroundColor: '#e0f0ff',
  margin: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  cursor: 'pointer',
    flex:'0 0 auto'
};

export default QuizCard;