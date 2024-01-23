import { Container, ProductContainer } from "./styles.js"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"
import { BackButton } from "../../components/BackButton"

import { RiSubtractFill, RiAddFill } from "react-icons/ri";

import { useAuth } from "../../hooks/auth"
import { useParams } from "react-router-dom";
import { api } from "../../services/api.js"
import { useState, useEffect } from "react"

export function Product(){
  const [product, setProduct] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const {user} = useAuth();
  const {id} = useParams();

  useEffect(() => {
    async function fetchProduct(){
      const productDetails = await api.get(`/products/${id}`);
      const ingredientsList = await api.get(`/ingredients/product_id/${id}`)
      setProduct(productDetails.data);
      setIngredients(ingredientsList.data);
    }

    fetchProduct();
  }, [])

  return (
    <Container>
      <Header />
        <Main>
          <ProductContainer>
            <BackButton />

            <div className="product">
              <img src={`${api.defaults.baseURL}/files/${product.image}`} alt="" />

              <div className="product_details">
                <h1>{product.name}</h1>

                <div className="description">{product.description}</div>

                <div className="tags">
                  {
                    ingredients.length > 0
                    &&
                    ingredients.map(item => (
                      <span key={item.id}>{item.name}</span>
                    ))
                  }
                </div>

                <div className="add_cart">
                  {
                  user.is_admin 
                  ? 
                  <button onClick={() => location.href=`/edit-product/${product.id}`}>Editar prato</button>
                  :
                  <>
                    <RiSubtractFill />
                    <span className="number_items">01</span>
                    <RiAddFill />

                    <button>incluir - R$ 25,00</button>
                  </>
                  }
                </div>
              </div>
            </div>
          </ProductContainer>
        </Main>
      <Footer />
    </Container>
  )
}