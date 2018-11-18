import { AsyncStorage } from 'react-native';
import { Decks } from '../components/model/fakeDatabase';


export function getInitialDecks() {
    return AsyncStorage.setItem('Decks', JSON.stringify(Decks))
        .then(() => AsyncStorage.getItem('Decks'))
}

export function getAllDecks() {
    return AsyncStorage.getItem('Decks');
}

//saveDeckTitle, takes in a title and saves it to the decks
export function saveDeckTitle(title) {
    return AsyncStorage.getItem('Decks')
        .then(decks => {
            const currentDeck = JSON.parse(decks);
            return AsyncStorage.setItem('Decks',JSON.stringify([ 
                ...currentDeck,
                {
                    id: title,
                    title,
                    questions: []
            }]));
        })
}

//addCardToDeck takes in title and deck and adds to the right deck
export function addCardToDeck(id,card) {
    return AsyncStorage.getItem('Decks')
        .then(decks => { 
            return JSON.parse(decks).map(deck => {
                if(deck.id === id) {
                    return {
                        ...deck,
                        questions: [...deck.questions, card]
                    }
                }
                return deck;
         })}
         )
        .then(decksWithAddedCard => {
            return AsyncStorage.setItem('Decks',JSON.stringify(decksWithAddedCard))
        });
}
