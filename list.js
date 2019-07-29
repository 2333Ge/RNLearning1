import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';
export default class FlatListBasics extends Component {
    render() {
        
        console.log('test');
        return (sectionListDemo);
    }
    
}


//长列表组件 FlatList 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
})
// 长列表+数据分组+分组标签 SectionList
const styles2 = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
//flatList demo
var flatListDemo = <View style={styles.container}>
<FlatList 
data = {[
    {key:'1'},
    {key:'2'},
    {key:'3'},
    {key:'4'},
    {key:'5'},
]}
renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}/>
</View>;
//sectionListDemo demo 长列表+数据分组+分组标签
var sectionListDemo = <View style={styles.container}>
<SectionList
  sections={[//和flatList不同
    {title: 'D', data: ['Devin']},
    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
  ]}
  renderItem={({item}) => <Text style={styles2.item}>{item}</Text>}
  renderSectionHeader={({section}) => <Text style={styles2.sectionHeader}>{section.title}</Text>}
  keyExtractor={(item, index) => index}//别忘了这个，作用建立索引？？
/>
</View>;