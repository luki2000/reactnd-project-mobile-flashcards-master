import React from 'react';
import { Text, View } from 'react-native';
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
    
    render() {
 
        const { questions } = this.props.navigation.state.params;
        const numberOfQuestions = questions.length;
        const currentQuestion = this.state.current;

        if(currentQuestion  === numberOfQuestions) {
            clearNotifcation()
                .then(setLocalNotfication)
        }
        return (
            <View style={{flex:1,alignItems: 'center'}}>
                <Text style={{fontSize:18}}>{`Questions answered: ${currentQuestion}/${numberOfQuestions}`}</Text>
            {currentQuestion ===  numberOfQuestions
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
