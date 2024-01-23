import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles"
import { RiHeartLine, RiHeartFill, RiSubtractFill, RiAddFill, RiPencilLine } from "react-icons/ri";
import { priceFormatter } from "../../utils/formatter";
import { ProductActions } from "../ProductActions"

import { api } from "../../services/api";

import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import { useFavorites } from "../../hooks/favorites"
import { useCart } from "../../hooks/cart"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export function ItemsCarousel({ title, category_id, search }){
  const [products, setProducts] = useState([]);

  const {user} = useAuth();

  const { favorites, handleFavorites } = useFavorites();
  const { cart, handleCart } = useCart();

  useEffect(() => {
    async function fetchProducts(){
      const productsList = await api.get("/products", {
        params:{
          category_id,
          name: search
        }
      });

      setProducts(productsList.data);
    }

    fetchProducts();
  }, [search])
  
  return (
    <Container>
      {
        products.length > 0
        &&
      <>
        <h2>{title}</h2>

        <Carousel responsive={responsive}>
          {
          products.map(product => (
            <div key={product.id}>
              <div className="product_container">
                <div className="favorite">
                  
                    {
                    user.is_admin 
                    ? 
                      <>
                        <NavLink to={`edit-product/${product.id}`}>
                          <RiPencilLine /> 
                        </NavLink>
                      </>
                    :
                    <>
                      {
                        (favorites.filter(item => item.id === product.id).length > 0)
                        ?
                        <RiHeartFill onClick={() => handleFavorites(product)} />
                        :
                        <RiHeartLine  
                          onClick={() => handleFavorites(product)} 
                        />
                      }                    
                    </>
                    }
                </div>

                <NavLink to={`product/${product.id}`}>
                  <img src={`${api.defaults.baseURL}/files/${product.image}`} alt="" />
                </NavLink>

                <NavLink to={`product/${product.id}`}>
                  <h3>{product.name}</h3>
                </NavLink>

                <span>{product.description}</span>

                <span className="price">R$ {priceFormatter(product.price)}</span>

                <ProductActions 
                  product={product}
                  handleCart={handleCart}
                />

                {/* <div className="add_cart">
                  <div>
                    <RiSubtractFill onClick={handleDecrementQuantity} />
                      <span className="number_items">{quantity}</span>
                    <RiAddFill onClick={handleIncrementQuantity} />
                  </div>
                
                  <button onClick={() => handleAddItem(product)}>incluir</button>
                </div> */}
              </div>
            </div>
          ))
          }
        </Carousel>
      </>
      }
    </Container>
  )
}