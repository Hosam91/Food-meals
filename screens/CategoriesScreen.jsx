import React from 'react'
import Category from '../components/Category'
import { CATEGORIES } from '../data/dummy-data'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function CategoriesScreen({ navigation }) {

  const renderCategoryItem=(itemData)=>{
    const pressHandler = () => {
      navigation.navigate('MealsOverView',{
        categoryId:itemData.item.id,
        categoryTitle:itemData.item.title,
      })
    }
     return <Category
        title={itemData.item.title}
        bgColor={itemData.item.color}
        onPressButton={pressHandler}
      />
  }
  return (
    <>
      <View style={styles.screenContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: 'row',
  },
  listContainer: {
    // width:'50%'
  },
})
