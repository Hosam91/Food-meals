import { createContext, useState } from 'react'

export const FavContext = createContext(null)

const FavContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([])
  const addFavorite = (id) => {
    setFavMealIds((prevIds) => [...prevIds, id])
  }
  const removeFavorite = (id) => {
    setFavMealIds((currentIds) => currentIds.filter((mealId) => mealId !== id))
  }

  return (
    <FavContext.Provider
      value={{ ids: favMealIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavContext.Provider>
  )
}

export default FavContextProvider
