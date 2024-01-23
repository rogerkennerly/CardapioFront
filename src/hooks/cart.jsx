import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

function CartProvider({children}){
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("@cardapio:cart") || "[]")

  const [cart, setcart] = useState(cartFromLocalStorage);

  function handleCart(product, qtd){
    if(cart.filter(item => item.id === product.id).length > 0){
      const cartValue = cart.filter(item => item.id !== product.id);
      setcart(cartValue);
    } else {
      product.qtd = qtd;
      setcart((oldValue) => [...oldValue, product]);
    }
  }

  useEffect(() => {
    localStorage.setItem("@cardapio:cart", JSON.stringify(cart))
  }, [cart])
  
  return (
    <CartContext.Provider value={{cart, handleCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  const context = useContext(CartContext);

  return context;
}

export {CartProvider, useCart};