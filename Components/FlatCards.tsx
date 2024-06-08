import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function FlatCards() {
 
    return (
      <View>
        <Text style={styles.HeaderTextStyle}> Flat Cads</Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text>Rose Silver</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text>Skyle blue</Text>
            </View>
            <View style={[styles.card, styles.cardFour]}>
                <Text>Choco</Text>
            </View>
            <View style={[styles.card, styles.cardFive]}>
                <Text>Gold</Text>
            </View>
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    HeaderTextStyle:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:8,
        paddingTop:8
    },
    container:{
flex:1,
flexDirection:'row',
padding:3
    },
    card:{
   height:100,
   width:100,
   margin:8,
   borderRadius:8,
   justifyContent:'center',
   alignItems:'center',
   flex:1
    },
    cardOne:{
backgroundColor:'#FF0000'
    },
    cardTwo:{
        backgroundColor:'#d4af37'
    },
    cardThree:{
        backgroundColor:'#87CEEB'
            },
   cardFour:{
        backgroundColor:'#B76E79'
     },
     cardFive:{
        backgroundColor:'#b08d57'
     }
        
})
