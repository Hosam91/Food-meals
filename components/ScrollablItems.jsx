import React from 'react'
import { FlatList, Text,StyleSheet, View } from 'react-native'

export default function ScrollablItems({data}) {
    const renderItem =(itemData)=>{

        return <Text style={styles.item}> {itemData.item}</Text>
    }
  return (
    <>
    <View style={styles.container}>
        <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item)=>item}
        />        
    </View>
    </>
  )
}
const styles=StyleSheet.create({
    container:{
        maxHeight:150,
        minWidth:'80%',
        maxWidth:'80%'
    },
    item:{
        backgroundColor:'#ddd',
        padding:5,
        marginVertical:5,
        textAlign:'center',
        width:'100%',
        borderRadius:7,


    }
})