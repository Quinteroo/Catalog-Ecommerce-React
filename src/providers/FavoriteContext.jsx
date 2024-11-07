import React, { useState } from "react"

export const FavoriteContext = React.createContext()


const FavoriteProvider = ({ children }) => {

  const [favs, setFavs] = useState([])

  const toggleFavorite = (product) => {
    const isFavorite = favs.some((fav) => fav.id === product.id)

    if (isFavorite) {
      setFavs(favs.filter((fav) => fav.id !== product.id))
    } else {
      setFavs([...favs, product])
    }
  }

  return (
    <FavoriteContext.Provider value={{
      favs: favs,
      toggleFavorite: toggleFavorite
    }}>
      {children}
    </FavoriteContext.Provider>
  )

}


export default FavoriteProvider
