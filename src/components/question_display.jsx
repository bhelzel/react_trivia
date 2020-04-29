import React from 'react';
import { Question } from './question';

export default class QuestionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { questions: "" };
    }

    fetchQuestions() {
        const url = "https://anothertriviaapi.herokuapp.com/questions";
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({ questions: res }));
    }

    componentWillMount() {
        this.fetchQuestions();
    }

    render() {
        console.log(Object.values(this.state.questions));
        return(
            <div>
                {
                    Object.values(this.state.questions).map(question => {
                        console.log(question)
                        // Object.values(questions).map(question => {
                        //     return(
                        //         <Question 
                        //             text={question.text}
                        //             category={question.category}
                        //             answer={question.answer}
                        //             dummyAnswers={question.dummy_answers}
                        //             key={question.id}
                        //         />
                        //     )
                        // })
                    })
                }
            </div>
        )
    }
}