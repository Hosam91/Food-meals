import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { FavContext } from '../store/context/context'
import { MEALS } from '../data/dummy-data'
import Meal from '../components/Meal'

export default function FavMeals() {
  const { addFavorite, removeFavorite, ids }= useContext(FavContext)

  // const favoritMeals = 
  const favMeals =ids.map((id)=>MEALS.find((meal)=>meal.id===id))

  function renderMealItem(itemData) {
    const meal = itemData.item

    return (
      <Meal
       id={meal.id}
        imgSrc={meal.imageUrl}
        mealTitle={meal.title}
        mealDuration={meal.duration}
        mealComplexity={meal.complexity}
        mealAffordability={meal.affordability}
        
      />
    )
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>{favMeals&&favMeals.length>0?"Your Favorite Meals":"Add Some Favorit Meals to find here!"}</Text>
      <FlatList
        data={favMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header:{
    color:'#fff',
    fontSize:22,
    textAlign:'center',
    padding:10,
  }
})
