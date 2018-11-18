import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

class CreateDeck extends React.Component {

    state = {
        text: '',
        decks: []
    }

    handleAddingDeck = () => {
        if(this.state.text == '') {
            return;
        }
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
    render() {

        console.log('navi',this.props.navigation.state.params);
        return (
            <View>
                <Text style={{fontSize: 50}}>CreateDeck</Text>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                title="Add a Deck"
                color="purple"
                onPress={() => this.handleAddingDeck(this.state.text)}
            />
            </View>
        );
    }
}

export default CreateDeck;
