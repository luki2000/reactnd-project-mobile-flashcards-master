import React from 'react';
import { Text, View, Button } from 'react-native';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import { clearNotifcation, setLocalNotfication} from '../../utils/helpers';

class Quiz extends React.Component {
    state = {
        current: 0,
        incorrect:0,
        correct:0,
    }

    correct = () => {
        this.setState( currState => {
            return {
            current: currState.current + 1,
            correct: currState.correct + 1
        }})
    }

    incorrect = () => {
        this.setState(currState => {
            return {
            current: currState.current + 1,
            incorrect: currState.incorrect + 1
        }})
    }

    startOver = () => {
        this.setState({
            current: 0,
            incorrect: 0,
            correct: 0
        })
    }
    
    //TODO
    //Add a 'one quiz completed today' property to asnystorage set to false
    //when at least one quiz is complete set the 'one quiz completed today' to true
    //implement the notifcation logic to check that property
    
    render() {
 
        const { questions } = this.props.navigation.state.params;
        const numberOfQuestions = questions.length;

        if(this.state.current  === numberOfQuestions) {
            clearNotifcation()
                .then(setLocalNotfication)
        }
        return (
            <View>
                <Text>{`questions answered: ${this.state.current}/${numberOfQuestions}`}</Text>
            {this.state.current ==  numberOfQuestions
                ? <QuizResult
                    correct={this.state.correct}
                    totalquestions={numberOfQuestions}
                    startover={this.startOver}
                    navigate={this.props.navigation}
                /> 
                : <QuizQuestion
                    setcorrect={this.correct}
                    setincorrect={this.incorrect}
                    questions={questions}
                    current={this.state.current}
                />}
            </View>
        );
    }
}

export default Quiz;
