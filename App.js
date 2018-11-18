import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { setLocalNotfication } from './utils/helpers'

//Components
import DeckList from './components/pages/DeckList';
import CreateDeck from './components/pages/CreateDeck';
import Deck from './components/pages/Deck';
import CreateCard from './components/pages/CreateCard';
import Quiz from './components/pages/Quiz';


export default class App extends React.Component {
  
  componentDidMount() {
    setLocalNotfication();
  }
  
  render() {
    return (
        <MainNavgation />
    );
  }
}

const MainNavgation = createStackNavigator({
  DeckList: { 
    screen: DeckList,
    navigationOptions: {
      headerTitle: 'Home'
   }
  },
  CreateDeck: { screen: CreateDeck,
    navigationOptions: {
      headerTitle: 'Create Your Deck'
   } 
  },
  Deck: { screen: Deck, navigationOptions: {
    headerTitle: 'Deck'
  } 
},
  CreateCard: { screen: CreateCard,
    navigationOptions: {
      headerTitle: 'Create Your Card'
   }
  },
  Quiz: { screen: Quiz,
    navigationOptions: {
      headerTitle: 'Quiz Time!'
   }
  },
},
{
  initialRouteName: 'DeckList',
});

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/