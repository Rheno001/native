import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../assets/favicon.png'
import {Link} from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <Image source={logo} style={styles.image}/> 
            <Text style={styles.title}>The number 1</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </Text>
            <View style={styles.card}>
                <Text>Hello, this is a card.</Text>
            </View>
            <Link href='/about'>About Page</Link>
            <Link href='/contact'>Contact Page</Link>
        </ThemedView>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,

    },
    card:{
        backgroundColor: '#EEE',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,.1)'
    },
    image:{
        marginVertical: 20,

    }
})