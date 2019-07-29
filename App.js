import React, { Component } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import FlatListBasics from "./list";
//电影列表demo
// var MOVIE_BEAN = [{
//     title:'电影名',
//     year:'2019',
//     posters:{thumbnail:"https://mubu.com/document_image/499e8562-783e-45c7-95b8-d708c65c5798-1440053.jpg"}
// }];

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json'; 

export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies:null
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
         //this.fetchData = this.fetchData.bind(this);没绑定也没问题？？？？
    }
     
    componentDidMount(){
    
        this.fetchData();
    }
render(){
    return <MoviesList movies = {this.state.movies}/>;//注意值的传递
    
}
//state 改变触发重新渲染,不用加function
fetchData(){
    fetch(REQUEST_URL)
        .then(response=>response.json())// 
        .then(responseJson=>
            this.setState(
                {
                    movies:responseJson.movies,
                }
            )
        )
}
}
class MoviesList extends Component{
    render(){
        if(!this.props.movies){
            return (<View>
                <Text>加载中。。。</Text>
            </View>);
        }else{
            return (<View >
                <FlatList
                    data={
                        this.props.movies
                    }
                    renderItem={({item})=><View style={styles.contianer}>
                        {/* 注意source属性的设置 ，没设置宽高，图片不会显示*/}
                        <Image source = {{uri:item.posters.thumbnail}} style={styles.thumbnail}/>
                        <View style={styles.textContianer}>
                        <Text style={styles.movieName}> {item.title}</Text>
                        <Text> {item.year}</Text>
                        </View>
                    </View>}    
                    keyExtractor = {(item)=>item.id}
                    />
                    
                    
            </View>);
        }
        
    }
}

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",//子元素沿着主轴的排列方式
        alignItems:"center",//子元素沿着次轴的排列方式
        backgroundColor:"#f5fcff",
        marginBottom:2,
        marginTop:2,
    },
    
    thumbnail:{
        height:81,
        width:53,
    },
    textContianer:{
        flex:1,//  占据剩余全部空间
        justifyContent:"center",//子元素沿着主轴的排列方式
        alignItems:"center",//子元素沿着次轴的排列方式
        // backgroundColor:"#f5fcf0"
    },
    movieName:{
        fontSize:20,
        marginBottom:20,
    },
    }
);