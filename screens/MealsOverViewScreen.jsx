import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import Meal from '../components/Meal'
export default function MealsOverViewScreen({  route }) {
  const { categoryId, categoryTitle } = route.params

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  })

  
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
        <FlatList
          data={displayedMeals}
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
})
