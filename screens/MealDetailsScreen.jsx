import React, { useLayoutEffect } from 'react'
import { Text, View, StyleSheet, Image, Button, } from 'react-native'
import { MEALS } from '../data/dummy-data'
import ScrollablItems from '../components/ScrollablItems'

export default function MealDetailsScreen({ route ,navigation}) {
  const { mealId} = route.params

  const presNavHandler =()=>{
    navigation.navigate('Categories')

  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <Button title='back to categoties' onPress={presNavHandler}/>
      }
    })
  },[])

  const meal = MEALS.find((meal)=> meal.id === mealId)


  return (
    <>
      <View style={styles.detailsContainer}>
      <Image style={styles.img} source={{ uri: meal.imageUrl }} />
        <View style={styles.mainDetails}>
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.smallDetails}>
            <Text style={styles.subTitle}>{meal.duration} m</Text>
            <Text style={styles.subTitle}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.subTitle}>{meal.affordability.toUpperCase()}</Text>
          </View>
          <Text style={styles.steps}> Ingredients</Text>
            <ScrollablItems data={meal.ingredients}/>
          <Text style={styles.steps}> Steps</Text>
            <ScrollablItems data={meal.steps}/>
          

        </View>
      </View>
    </>
  )
}
const styles =StyleSheet.create({
  detailsContainer:{
    flex:1,
    alignItems:'center'
  },
  img: {
    width: '100%',
    height: 300,
    
  },
  mainDetails:{
    alignItems:'center',

  },
  title:{
    margin:10,
    fontSize:17,
    color:'#ffffff',
    fontWeight:'bold',
    letterSpacing:3,

  },
  smallDetails:{
    flexDirection:'row',
  },
  subTitle:{
    margin:10,
    color:'#fff',

  },
  steps:{
    margin:10,
    color:'#fff',
    fontSize:16,
    letterSpacing:3,
  }
})