import React, { useState } from "react"

export const FavoriteContext = React.createContext()


const FavoriteProvider = ({ children }) => {

  const [favs, setFavs] = useState([])

  const toggleFavorite = (product) => {
    if (favs.includes(product)) {
      setFavs(favs.filter((fav) => fav !== product));
    } else {
      setFavs([...favs, product]);
    }
  };

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
