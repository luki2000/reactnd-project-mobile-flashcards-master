import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class QuizQuestion extends React.Component {
    state = {
        status:false
    }

showAnswer = () => {
    this.setState({status: true})
}

hideAnswer = () => {
    this.setState({status: false})
}

    render() {
        console.log(this.state.status)
        return (
        <View>
            <Text style={{fontSize:50}}>{this.props.questions[this.props.current].question}</Text>
            
            {!this.state.status 
                ? <TouchableOpacity
                style={{width:50,height:50}}
                onPress={this.showAnswer}
            ><Text>Reveal Answer</Text></TouchableOpacity>
                : null
            }

            {this.state.status ?<Text>{this.props.questions[this.props.current].answer}</Text> : null}
            
            <TouchableOpacity
                style={{backgroundColor:'green', marginTop:20,borderRadius:5, padding:8}}
                onPress={() => {
                    this.props.setcorrect()
                    this.hideAnswer()
                }}
            ><Text style={{color:'white',textAlign:'center'}}>Correct</Text></TouchableOpacity>
             <TouchableOpacity
                style={{backgroundColor:'red', marginTop:20, borderRadius:5, padding:8, textAlign:'center'}}
                onPress={() => {
                    this.props.setincorrect()
                    this.hideAnswer()
                }}
            ><Text style={{color:'white', textAlign:'center'}}>Incorrect</Text></TouchableOpacity>
        </View>
        );
    }
}

export default QuizQuestion;
