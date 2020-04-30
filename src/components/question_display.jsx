import React from 'react';
import Question from './question';

export default class QuestionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            questions: [], 
            questionOrder: 0
        };
    }

    fetchQuestions() {
        const url = "https://anothertriviaapi.herokuapp.com/questions";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                this.setState({ questions: res.data });
                this.setState({ questionOrder: res.data.length });
            });
    }

    generateRandomOrder() {
        let questionOrder = [];
        let i = 0;
        while (i < this.state.questionOrder) {
            let idx = (Math.random() * this.state.questionOrder).floor();
            if (questionOrder.includes(idx)) {
                continue;
            } else {
                questionOrder.push(idx);
                i ++;
            }
        }
        this.setState({ questionOrder: questionOrder });
    }

    componentWillMount() {
        this.fetchQuestions();
        this.generateRandomOrder();
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
                                key={question.attributes.id}
                            />      
                        )
                    }))
                }
            </div>
        )
        
    }
}