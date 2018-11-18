import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { addCardToDeck, getAllDecks } from '../../utils/api';

class CreateCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            question: '',
            answer:''
        };
    }
    
    handleAddingCard = (id) => {
        const card = {
            question: this.state.question,
            answer: this.state.answer
        }
        if(id && card) {

            this.setState = ({ 
                question: '',
                answer:''
            });

            this.props.navigation.state.params.updateDeck(id,card);
            this.props.navigation.navigate('DeckList');
          
        }
    }


    render() {
        //console.log('input', typeof this.state.question, this.state.answer);
        //console.log('create card', this.props.navigation.state.params);
        console.log('update?',this.props.navigation.state.params.updateDecks);
        const { id, title} = this.props.navigation.state.params;
        return (
            <View>
                <Text>Create Card</Text>
                
                <Text>Add Question</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({question:text})}
                    value={this.state.question}
                />

                <Text>Add Answer</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({answer:text})}
                    value={this.state.answer}
                />
                <Button
                title="Add card to Deck"
                color="purple"
                onPress={() => this.handleAddingCard(id)}
            />
            </View>
        );
    }
}

export default CreateCard;
