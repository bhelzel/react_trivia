import React from 'react';
import Question from './question';

export default class QuestionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { questions: [] };
    }

    fetchQuestions() {
        const url = "https://anothertriviaapi.herokuapp.com/questions";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                this.setState({ questions: res.data });
            });
    }

    makeQuestionCards() {
        let questionCards = [];
        Object.values(this.state.questions).map(question => {
            questionCards.push(
                Question.New(
                    question.attributes.text,
                    question.attributes.category,
                    question.attributes.answer,
                    question.attributes.dummy_answers
                )    
            );
        });
        this.setState({ question: questionCards });
    }

    componentWillMount() {
        this.fetchQuestions();
        this.makeQuestionCards();
    }

    render() {
        console.log(Object.values(this.state.questions));
        return(
            <div>
                <p>derp</p>
            </div>
        )
    }
}