import React from 'react';
import { Text, View, Button } from 'react-native';

class QuizResult extends React.Component {
    //1. Score displayed(percentage of correct answers.)
    //2. start quiz over again
    //3.Go back to individual Deck
    render() {
        const { goBack } = this.props.navigate;
        return (
            <View>
                <Text>QuizResult</Text>
                <Text>{`You managed at total of ${Math.floor(this.props.correct/this.props.totalquestions * 100)}% correct answers`}</Text>

                <Button
                title="Start Over"
                color="purple"
                onPress={this.props.startover}
                />
                

                <Button
                color="purple"
                onPress={ () =>  goBack()} 
                title="Go back to this Deck's page"
                />
                
            </View>
        );
    }
}

export default QuizResult;
