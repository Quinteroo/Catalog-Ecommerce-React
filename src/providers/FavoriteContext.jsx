import React, { useState } from "react"

export const FavoriteContext = React.createContext()


const FavoriteProvider = ({ children }) => {

  const [favs, setFavs] = useState([])

  const toggleFavorite = (product) => {
    if (favs.includes(product)) {
      // Elimina el producto de favoritos si ya está en la lista
      setFavs(favs.filter((fav) => fav !== product));
    } else {
      // Agrega el producto a favoritos si no está en la lista
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