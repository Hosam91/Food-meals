import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Meal(props) {
  const {
    imgSrc,
    mealTitle,
    mealAffordability,
    mealComplexity,
    mealDuration,
    id
  } = props

const navigation= useNavigation();

  const handlPressMeal = () => {
    navigation.navigate("MealDetails", {
      mealTitle: mealTitle,
      mealId: id,
    })

    // navigation.navigate('MealDetails',
    //  { screen: 'MealDetails', params: { mealTitle, mealID:id }});
  }

  return (
    <>
    <Pressable android_ripple={{color:'#ccc'}} onPress={handlPressMeal}>
      <View style={styles.mealContailer}>
        <Image style={styles.img} source={{ uri: imgSrc }} />
        <View>
          <Text style={styles.mealTitle}>{mealTitle}</Text>
          <Text style={styles.mealDesc}>
            {mealDuration} ms {mealComplexity} {mealAffordability}
          </Text>
        </View>
      </View>
      </Pressable>
    </>
  )
}
const styles = StyleSheet.create({
  mealContailer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  img: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mealTitle: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealDesc: {
    textAlign: 'center',
    margin: 8,
  },
})
