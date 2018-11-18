import React from 'react';
import { Text, View, Button } from 'react-native';

class QuizQuestion extends React.Component {
    
    //1. Question
    //2. Show answer reveals answer
    //3. Incorrect & Correct button
    //4. View Questions Remaining
    render() {
        return (
        <View>
            <Text>{this.props.questions[this.props.current].question}</Text>
            <Text>{this.props.questions[this.props.current].answer}</Text>
            <Button
                title="Correct"
                color="green"
                onPress={this.props.setcorrect}
            />
            <Button
                title="Incorrect"
                color="red"
                onPress={this.props.setincorrect}
            />
        </View>
        );
    }
}

export default QuizQuestion;
