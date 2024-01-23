import { Header } from "../../components/Header/index.jsx"
import { Main } from "../../components/Main/index.jsx"
import { Footer } from "../../components/Footer/index.jsx"
import { Container } from "./styles.js"

import { useCart } from "../../hooks/cart"
import { api } from "../../services/api.js"
import { useState, useEffect } from "react"
import { priceFormatter } from "../../utils/formatter.js"

export function Orders(){
  const [productsDatabase, setProductsDatabase] = useState([]);
  const [total, setTotal] = useState(0);

  const { cart, handleCart } = useCart();
  // const productList = productsDatabase.filter(item => item.id === orders.id);
  const productList = [];

  cart.map(item => {
    productsDatabase.map(itemDatabase => {
      if(item.id === itemDatabase.id){
        return productList.push(item);
      }
    })
  })

  const totalOrder = cart.reduce((previousValue, item) => {
    console.log(priceFormatter(item.price, false))
    return (previousValue += priceFormatter(item.price, false) * item.qtd);
  }, 0)

  useEffect(() => {
    async function getProductsDatabase(){
      const response = await api.get("/products");
      setProductsDatabase(response.data);
    }
    getProductsDatabase();
  }, [])

  // console.log(totalOrder);
  
  return (
    <Container>
      <Header />
        <Main>
          <h1>Meu pedido</h1>

          <div className="productList">
            {
              productList.map(product => {
                return <div className="product" key={product.id}>
                  <img src={`${api.defaults.baseURL}/files/${product.image}`} alt="" />
                  <div>
                    <h3>
                      {`
                      ${product.qtd}
                      x 
                      ${product.name}
                      `}
                    </h3>
                    <div className="price">R$ {product.price}</div>
                    <span onClick={() => handleCart(product)}>Excluir</span>
                  </div>
                </div>
              })
            }     
  
          </div>
          <div className="total">Total: R$ {priceFormatter(totalOrder)}</div>     
        </Main>
      <Footer />
    </Container>
  )
}