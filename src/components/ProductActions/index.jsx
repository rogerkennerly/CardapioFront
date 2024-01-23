import {Container} from "./styles"
import { RiSubtractFill, RiAddFill } from "react-icons/ri";
import { useState } from "react";

export function ProductActions({product, handleCart}){
  const [quantity, setQuantity] = useState(1);

  function handleIncrementQuantity(){
    setQuantity(quantity => quantity+1);
  }

  function handleDecrementQuantity(){
    if(quantity > 1){
      setQuantity(quantity => quantity-1);
    }
  }

  function handleAddItem(product){
    handleCart(product, quantity)
    setQuantity(1);
  }
  return(
  <Container>
    <div className="carLine">
      <RiSubtractFill onClick={handleDecrementQuantity} />
        <span className="number_items">{quantity}</span>
      <RiAddFill onClick={handleIncrementQuantity} />
    </div>
              
    <button onClick={() => handleAddItem(product, quantity)}>incluir</button>
  </Container>
  )
}