import React, { Component } from 'react'
import UserList from '../Components/UserList'
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';

const sampleData = [
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mrs', first: 'asuncion', last: 'gomez' },
    email: 'asuncion.gomez@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
    nat: 'ES',
  },
  {
    name: { title: 'miss', first: 'gilcenira', last: 'ribeiro' },
    email: 'gilcenira.ribeiro@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
  },
]

export default class App extends Component {
  render() {
    return (
        <View style={styles.main_container}>
        <View style={styles.top_container}>
            <Text style={styles.main_text}>Hello Halim,</Text>
            <Text style={styles.around_text}>Votre sosie le plus proche</Text>
            <UserList style={styles.user_list} data={sampleData} />
        </View>
        <View style={styles.bot_container}>
            <Text style={styles.bot_text}>Vos autres sosies</Text>
            <UserList data={sampleData} />
        </View>
        
        </View>
      )
  }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,  
        flexDirection: 'column' 
    },
    top_container: {
        flex: 3,
        backgroundColor: '#0094b6',
        borderBottomLeftRadius: 50
    },
    bot_container: {
        flex: 2,
        backgroundColor: '#f7f7f7', 
    },
    main_text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 50,
    },
    around_text: {
        fontSize: 15,
        color: 'white',
        marginLeft: 10,
        marginTop: 25,
    },
    bot_text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 100,
    },
    carousel_container: {
        flex: 1,
        backgroundColor:'#131420',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    user_list: {
        padding: 20,
    }
})