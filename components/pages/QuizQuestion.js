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
        return (
        <View style={{flex:1, alignItems: 'center'}}>
            <Text style={{fontSize:50}}>{this.props.questions[this.props.current].question}</Text>
            
            {!this.state.status 
                ? <TouchableOpacity
                style={{backgroundColor: 'orange', width:120,height:80,marginTop:60,marginBottom: 60, padding:20,borderRadius:5}}
                onPress={this.showAnswer}
            ><Text style={{textAlign:'center'}}>Reveal Answer</Text></TouchableOpacity>
                : null
            }

            {this.state.status ?<Text style={{top:80, fontSize: 20}}>{this.props.questions[this.props.current].answer}</Text> : null}
            
            <TouchableOpacity
                style={{backgroundColor:'green', width: 150, marginTop:20,borderRadius:5, padding:8, position:'absolute', top:300}}
                onPress={() => {
                    this.props.setcorrect()
                    this.hideAnswer()
                }}
            ><Text style={{color:'white',textAlign:'center'}}>Correct</Text></TouchableOpacity>
             <TouchableOpacity
                style={{backgroundColor:'red', width: 150, marginTop:20, borderRadius:5, padding:8, position:'absolute', top:350}}
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
