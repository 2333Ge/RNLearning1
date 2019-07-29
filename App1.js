//练习1
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput,Button,Alert} from 'react-native';
import { gray, green, blue } from 'ansi-colors';
// 自定义组件，props传入属性

class MView1 extends Component{
  render(){
      return (
      <View style={{backgroundColor:gray}}>
        <Text style={{color:this.props.textColor}}>{this.props.text}</Text>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}} style={{width:200,height:100}}/>
      </View>
      );

  }
}
//自定义组件2，改变state更新组件
class MView2 extends Component{
  state = {isDisplay:true};

  componentDidMount(){
    setInterval(
      
      ()=>this.setState(
        (a)=>{
        return {isDisplay:!a.isDisplay}
      }),1000
    );
  }
  render(){
    return (
      this.state.isDisplay?
      <MView1 text="3" textColor = "green"/>:
      null

    );
  }

}
//自定义样式，通过StyleSheet.cteate方法
const mStyle1 = StyleSheet.create({
  bigGreen:{
      color:'green',
      fontSize:60,
      backgroundColor:'blue'
  },
  red:{
      color:'red'
  },
  bigFont:{
      fontSize:80
  }
});

export default class HelloWorldApp extends Component {
  state = {
    text: ''
  }
  render() {
    
    return (
        <View style={{flex:1}}>
          {/* 样式被覆盖了,内联样式大于外联 */}
          <MView2 style={mStyle1.bigFont}/>
          <Text style={mStyle1.bigGreen}>test</Text>
          {/* 弹性宽高flex + flexbox*/}
          <View style={{flexDirection:"row",justifyContent:"center"}}>
            <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
            <View style={{width:50, height:50, backgroundColor: 'skyblue'}} />
            <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
          </View>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ')
            .map((word) => word && '🍕') //从删除word&&可以看出，这句话的作用是为了排除字符等于“”时的情况
            .join(' ')}
        </Text>
        <Button onPress={
        ()=>{Alert.alert("点击事件");}}
         title = "点击"/>
          </View>
    );
  }
}