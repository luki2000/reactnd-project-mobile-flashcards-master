import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

class Deck extends React.Component {
    render() {
        const { id, title, questions } = this.props.navigation.state.params.deck;
        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontSize:35,marginTop:60}}>{`${title} Question`}</Text>
                <Text style={{marginBottom:30}}>{`${questions.length} Card(s)`}</Text>


                <TouchableOpacity
                    style={{marginTop:20, backgroundColor:'purple', borderRadius:5, padding:8}}
                    title="Start Quiz"
                    color="#841584"
                    onPress={ () => {
                        this.props.navigation.navigate('Quiz', {
                            questions,
    
                        });
                    }}
                ><Text style={{color:'white'}}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginTop:20, backgroundColor:'purple', borderRadius:5, padding:8}}
                    onPress={ () => {
                        this.props.navigation.navigate('CreateCard', {
                            id,
                            title,
                            updateDeck: this.props.navigation.state.params.updateDeck
    
                        });
                    }}
                >
                <Text style={{color:'white'}}>Create Card</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Deck;
