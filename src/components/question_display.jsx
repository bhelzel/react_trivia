import React from 'react';
import { Question } from './question';

export default class QuestionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("https://anothertriviaapi.herokuapp.com/questions")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return(
            <div>
                {
                    Object.values(this.state.apiResponse).map(question => {
                        return(
                            <Question 
                                text={question.text}
                                category={question.category}
                                answer={question.answer}
                                dummyAnswers={question.dummy_answers}
                                key={question.id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}