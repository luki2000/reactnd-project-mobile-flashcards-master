import React from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';

class CreateDeck extends React.Component {

    state = {
        text: '',
        decks: []
    }

    handleAddingDeck = () => {
        if(!this.state.text) {
            Alert.alert(
                'You need to fill in the Title'
             )
        } else {
            const title = this.state.text;
            
            this.props.navigation.state.params.addDeck(title)
                .then(this.props.navigation.navigate('Deck',{
                    deck: {
                        id: title,
                        title,
                        questions: []  
                },
                updateDeck: this.props.navigation.state.params.updateDeck
                }));
        }
    }
    render() {
        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'50%',margin:40}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                title="Add Deck"
                color="purple"
                onPress={() => this.handleAddingDeck(this.state.text)}
                />
            </View>

        );
    }
}

export default CreateDeck;
