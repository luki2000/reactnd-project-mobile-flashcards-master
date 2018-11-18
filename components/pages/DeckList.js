import React from 'react';
import { Text, View, Button, TouchableOpacity,FlatList } from 'react-native';
import { getInitialDecks, getAllDecks,addCardToDeck, saveDeckTitle } from '../../utils/api';

class DeckList extends React.Component {
    state = {
        decks:[],
    };

     componentDidMount() {
        getInitialDecks()
            .then(decks => { 
                this.setState({decks:JSON.parse(decks)})
                
            }
                )
            .catch(err => console.log('err'));
    }

    updateDeck = (id,card) => {
        addCardToDeck(id,card)
        .then( _ => {
            getAllDecks()
            .then(decks => this.setState({decks:JSON.parse(decks)}))
        })
        .catch(err => console.log(err));
        
    }

    addDeck = (title) => {
        return saveDeckTitle(title)
        .then( _ => {
            getAllDecks()
            .then(decks => this.setState({decks:JSON.parse(decks)}))
        });
    }

    render() {

        let decksInfo = this.state.decks ? this.state.decks.map(deck => 
                (<TouchableOpacity
                    style={{borderWidth: 0.5,borderColor: 'black',width:'100%',padding:20, textAlign:'center'}}
                    key={deck.title}
                    onPress={ () => {
                        this.props.navigation.navigate('Deck', {
                            deck,
                            updateDeck: this.updateDeck
                        });
                    }}>
                    <Text style={{fontSize:30}}>{`Title: ${deck.title}`}</Text>
                    <Text style={{fontSize:15}}>{`${deck.questions.length} cards`}</Text>   
                </TouchableOpacity>)
            ) : null;
        
        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <TouchableOpacity
                    style={{width:120,height:40,marginTop:60,marginBottom: 60, paddingLeft:20,paddingTop:10,borderRadius:5,borderWidth: 0.5,
                        borderColor: 'black',textAlign:'center'}}
                    onPress={ () => {
                    this.props.navigation.navigate('CreateDeck', {
                        addDeck: this.addDeck,
                        updateDeck: this.updateDeck
                    })}}><Text>Create Deck</Text>
                </TouchableOpacity>
                <Text style={{fontSize:50}}>Deck List</Text>
                {decksInfo}
            </View>
        );
    }
}

export default DeckList;
