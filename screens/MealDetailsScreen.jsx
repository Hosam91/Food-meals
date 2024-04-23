import React, { useContext, useLayoutEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import { MEALS } from '../data/dummy-data'
import ScrollablItems from '../components/ScrollablItems'
import Icon from '../components/Icon'
import { FavContext } from '../store/context/context'

export default function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params
  const { addFavorite, removeFavorite, ids } = useContext(FavContext)

  const favoritMeal = ids.includes(mealId)

  const presNavHandler = () => {

    if (favoritMeal) {
      removeFavorite(mealId)
    } else {
      addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            name={favoritMeal ? 'star' : 'star-outline'}
            color={'#fff'}
            size={25}
            onPress={presNavHandler}
          />
        )
      },
    })
  }, [favoritMeal])

  const meal = MEALS.find((meal) => meal.id === mealId)

  return (
    <>
      <ScrollView style={styles.scroll} nestedScrollEnabled={true}>
        <View style={styles.detailsContainer}>
          <Image style={styles.img} source={{ uri: meal.imageUrl }} />
          <View style={styles.mainDetails}>
            <Text style={styles.title}>{meal.title}</Text>
            <View style={styles.smallDetails}>
              <Text style={styles.subTitle}>{meal.duration} m</Text>
              <Text style={styles.subTitle}>
                {meal.complexity.toUpperCase()}
              </Text>
              <Text style={styles.subTitle}>
                {meal.affordability.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.steps}> Ingredients</Text>
            <View>
              <ScrollablItems data={meal.ingredients} />
            </View>
            <Text style={styles.steps}> Steps</Text>
            <View>
              <ScrollablItems data={meal.steps} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  scroll: {
    marginBottom: 16,
    padding: 16,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 350,
  },
  mainDetails: {
    alignItems: 'center',
  },
  title: {
    margin: 10,
    fontSize: 17,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  smallDetails: {
    flexDirection: 'row',
  },
  subTitle: {
    margin: 10,
    color: '#fff',
  },
  steps: {
    margin: 10,
    color: '#fff',
    fontSize: 16,
    letterSpacing: 3,
  },
})
