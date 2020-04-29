import React from 'react';

export const Question = ({ text, category, answer, dummyAnswers }) => {
    return(
        <div>
            <p>{text}</p>
            <p>{category}</p>
            <p>{answer}</p>
            <p>{dummyAnswers}</p>
        </div>
    )
}