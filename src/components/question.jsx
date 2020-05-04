import React from 'react';
import { render } from '@testing-library/react';
import '../stylesheets/question.css';

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

    shuffleAnswerOrder() {
        return [0,1,2,3].sort(() => Math.random() - 0.5);
    }

    render(){
        return(
            <form onSubmit={() => this.handleSubmit()} className="question-form">
                <div className="question">
                    <p>{this.state.text}</p>
                    <p>{this.state.category}</p>
                    <div className="answers">
                        <label>{this.state.answer}
                            <input type="radio" />
                        </label>
                        {
                            this.state.dummyAnswers.map(answer => {
                                return(
                                    <label>{answer}
                                        <input type="radio" />
                                    </label>
                                )
                            })}
                    </div>
                </div>
                <button type="submit">Answer</button>
            </form>
        )
    }
}
