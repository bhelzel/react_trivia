import React from 'react';
import Question from './question';

export default class QuestionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { questions: [] };
        this.shuffleQuestions.bind(this);
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

    componentWillMount() {
        this.fetchQuestions();
    }

    render() {
        // console.log(Object.values(this.state.questions));
        return(
            <div>
                {
                    Object.values(this.state.questions.map(question => {
                        // console.log(question);
                        return(
                            <Question 
                                text={question.attributes.text}
                                category={question.attributes.category}
                                answer={question.attributes.answer}
                                dummyAnswers={question.attributes["dummy-answers"]}
                                key={question.attributes.id}
                            />      
                        )
                    }))
                }
            </div>
        )
        
    }
}