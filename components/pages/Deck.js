import React from 'react';
import { Text, View, Button } from 'react-native';

class Deck extends React.Component {
    render() {
        const { id, title, questions } = this.props.navigation.state.params.deck;
        return (
            <View>
                <Text>{id}</Text>
                <Text>{`${questions.length} Card(s)`}</Text>
                <Text>{JSON.stringify(questions)}</Text>


                <Button
                    title="Start Quiz"
                    color="#841584"
                    onPress={ () => {
                        this.props.navigation.navigate('Quiz', {
                            questions,
    
                        });
                    }}
                />

                <Button
                    title="Create Card"
                    color="#841584"
                    onPress={ () => {
                        this.props.navigation.navigate('CreateCard', {
                            id,
                            title,
                            updateDeck: this.props.navigation.state.params.updateDeck
    
                        });
                    }}
                />

            </View>
        );
    }
}

export default Deck;
