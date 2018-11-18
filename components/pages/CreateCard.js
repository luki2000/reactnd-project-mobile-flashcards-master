import React from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
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
        if(this.state.question && this.state.answer) {

            this.setState = ({ 
                question: '',
                answer:''
            });

            this.props.navigation.state.params.updateDeck(id,card);
            this.props.navigation.navigate('DeckList');
          
        } else {
            Alert.alert(
                'You need to fill both question & answer'
             )
        }
    }

    render() {
        const { id } = this.props.navigation.state.params;
        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{marginTop:20}}>Add Question</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'50%',margin:20}}
                    onChangeText={(text) => this.setState({question:text})}
                    value={this.state.question}
                />

                <Text>Add Answer</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'50%', margin:20}}
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
