import React from 'react';

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
                <p>{this.state.apiResponse}</p>
            </div>
        )
    }
}