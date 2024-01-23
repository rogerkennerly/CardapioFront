import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"
import { Container } from "./styles.js"

import { useFavorites } from "../../hooks/favorites"
import { api } from "../../services/api.js"
import { useState, useEffect } from "react"

export function Favorites(){
  const [productsDatabase, setProductsDatabase] = useState([]);
  const { favorites, handleFavorites } = useFavorites();
  // const productList = productsDatabase.filter(item => item.id === favorites.id);
  const productList = [];

  favorites.map(item => {
    productsDatabase.map(itemDatabase => {
      if(item.id === itemDatabase.id){
        return productList.push(item);
      }
    })
  })


  useEffect(() => {
    async function getProductsDatabase(){
      const response = await api.get("/products");
      setProductsDatabase(response.data);
    }
    getProductsDatabase();
  }, [])
  
  return (
    <Container>
      <Header />
        <Main>
          <h1>Meus favoritos</h1>

          <div className="productList">
            {
              productList.map(product => {
                return <div className="product" key={product.id}>
                  <img src={`${api.defaults.baseURL}/files/${product.image}`} alt="" />
                  <div>
                    <h3>{product.name}</h3>
                    <span onClick={() => handleFavorites(product)}>Remover dos Favoritos</span>
                  </div>
                </div>
              })
            }            
          </div>
        </Main>
      <Footer />
    </Container>
  )
}