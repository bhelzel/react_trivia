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

    componentWillMount() {
        this.fetchQuestions();
    }

    render() {
        console.log(Object.values(this.state.questions));
        return(
            <div>
                {
                    Object.values(this.state.questions.map(question => {
                        return(
                            <Question 
                                text={question.attributes.text}
                                category={question.attributes.category}
                                answer={question.attributes.answer}
                                dummyAnswers={question.attributes["dummy-answers"]}
                            />      
                        )
                    }))
                }
            </div>
        )
        
    }
}