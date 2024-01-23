import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext([]);

function FavoritesProvider({children}){
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("@cardapio:favorites") || "[]")

  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);

  function handleFavorites(product){
    if(favorites.filter(item => item.id === product.id).length > 0){
      const favoritesValue = favorites.filter(item => item.id !== product.id);
      setFavorites(favoritesValue);
    } else {
      setFavorites((oldValue) => [...oldValue, product]);
    }
  }

  useEffect(() => {
    localStorage.setItem("@cardapio:favorites", JSON.stringify(favorites))
  }, [favorites])
  
  return (
    <FavoritesContext.Provider value={{favorites, handleFavorites}}>
      {children}
    </FavoritesContext.Provider>
  )
}

function useFavorites(){
  const context = useContext(FavoritesContext);

  return context;
}

export {FavoritesProvider, useFavorites};