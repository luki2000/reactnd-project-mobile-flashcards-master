import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class QuizResult extends React.Component {
    //1. Score displayed(percentage of correct answers.)
    //2. start quiz over again
    //3.Go back to individual Deck
    render() {
        const { goBack } = this.props.navigate;
        const resultInPercentage = Math.floor(this.props.correct/this.props.totalquestions * 100);
        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{marginTop: 50, fontSize:20}}>QuizResult</Text>
                <Text style={{marginTop: 20, fontSize:16}}>{`You managed a total of ${resultInPercentage}% correct answers`}</Text>
                <Text style={{marginTop: 20, fontSize:16}}>{resultInPercentage > 49 ? 'You Did Well, Bravo!':'You need to practise'}</Text>
  
                 <TouchableOpacity
                    style={{marginTop:20, backgroundColor:'purple', borderRadius:5, padding:8}}
                    title="Start Over"
                    onPress={this.props.startover}
                ><Text style={{color:'white'}}>Start Over</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{marginTop:20, backgroundColor:'purple', borderRadius:5, padding:8}}
                    onPress={ () =>  goBack()}
                ><Text style={{color:'white'}}>Go to Deck</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default QuizResult;
