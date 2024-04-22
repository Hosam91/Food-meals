import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View, } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MealsOverViewScreen from './screens/MealsOverViewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavMeals from './screens/FavMeals'

const Drawer = createDrawerNavigator();
function DrawerNavigator (){
 < Drawer.Navigator screenOptions={{
  headerStyle:{backgroundColor:'#351401' },
  headerTintColor:'#fff',
  contentStyle:{backgroundColor:'#3f2f25'}
}}>
    <Drawer.Screen name="Categories" component={CategoriesScreen}/>
    <Drawer.Screen name="favMeals" component={FavMeals}/>
 </Drawer.Navigator>
}
 
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      
      <NavigationContainer>
        <Stack.Navigator >

          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
          options={{
            title:'All Catigoriess', 
          }} />
         

          <Stack.Screen
           name="MealsOverView" 
           component={MealsOverViewScreen}
           options={({route,navigation})=>{
            const categoryTitle= route.params.categoryTitle
            return {
              title:categoryTitle 
            }
           }}
           />

        <Stack.Screen
         name="MealDetails"
          component={MealDetailsScreen}
         
          />
        </Stack.Navigator>
       

       
      </NavigationContainer>
       
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // marginTop: '5%',
  },
})
