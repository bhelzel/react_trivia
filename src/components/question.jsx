import React from 'react';
import { render } from '@testing-library/react';

export default class Question extends React.Component {

    constructor({ text, category, answer, dummyAnswers }) {
        super({ text, category, answer, dummyAnswers });
        this.state = {
            text: text,
            category: category,
            answer: answer,
            dummyAnswers: dummyAnswers
        };
        this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log('submitted');
    }

    render(){
        return(
            <form onSubmit={() => this.handleSubmit()} className="question-form">
                <div className="question">
                    <p>{this.state.text}</p>
                    <p>{this.state.category}</p>
                    <div>
                        <input type="radio">{this.state.answer}</input>
                        {
                            this.state.dummyAnswers.map(answer => {
                                return(
                                    <input type="radio">{answer}</input>
                                )
                            })}
                    </div>
                </div>
                <button type="submit">Answer</button>
            </form>
        )
    }
}
