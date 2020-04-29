import React from 'react';

export default class Question extends React.Component {
    
    constructor({ text, category, answer, dummy_answers }) {
        this.state = {
            text: text,
            category: category,
            answer: answer,
            dummyAnswers: dummy_answers
        };
    }
}