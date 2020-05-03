import React from 'react';
import Question from './question';

export default class QuestionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            questions: [],
            currentQuestion: ""
        };
        this.shuffleQuestions.bind(this);
        this.nextQuestion.bind(this);
    }

    fetchQuestions() {
        const url = "https://anothertriviaapi.herokuapp.com/questions";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.shuffleQuestions(res.data);
                this.setState({ questions: res.data });
            });
    }

    shuffleQuestions(questions) {
        questions.sort(() => Math.random() - 0.5);
        return questions;
    }

    componentDidMount() {
        this.fetchQuestions();
    }

    nextQuestion() {
        
    }

    render() {
        return(
            <div className="game-page">
                <div className="question-container">
                    {
                        Object.values(this.state.questions.map((question, i) => {
                            return(
                                <Question 
                                    text={question.attributes.text}
                                    category={question.attributes.category}
                                    answer={question.attributes.answer}
                                    dummyAnswers={question.attributes["dummy-answers"]}
                                    key={question.attributes.id}
                                    i={i}
                                />      
                            )
                        }))
                    }
                </div>
                <button onClick={() => this.nextQuestion()} className="next-button"></button>
            </div>
        )
        
    }
}