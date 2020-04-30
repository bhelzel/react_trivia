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
        console.log(this.state.dummyAnswers);
        return(
            <form onSubmit={() => this.handleSubmit()} className="question-form">
                <div className="question">
                    <p>{this.state.text}</p>
                    <p>{this.state.category}</p>
                    <ul>
                        <li>{this.state.answer}</li>
                        {
                            this.state.dummyAnswers.map(answer => {
                                return(
                                    <li>{answer}</li>
                                )
                            })}
                    </ul>
                </div>
                <button type="submit">Answer</button>
            </form>
        )
    }
}
