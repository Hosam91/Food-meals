import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MealsOverViewScreen from './screens/MealsOverViewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavMeals from './screens/FavMeals'
import Icon from './components/Icon'
import FavContextProvider from './store/context/context'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#615954' },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#4b4b46',
        drawerActiveBackgroundColor: '#e69f11',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Catigories'.toUpperCase(),
          drawerIcon: (color, size) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favMeals"
        component={FavMeals}
        options={{
          title: 'Favorit Meals'.toUpperCase(),
          drawerIcon: (color, size) => (
            <Icon name="star-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <FavContextProvider>
        <StatusBar style="light" />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
              options={({ route, navigation }) => {
                const categoryTitle = route.params.categoryTitle
                return {
                  title: categoryTitle,
                }
              }}
            />

            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContextProvider>
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
