import { Container, BannerHome } from "./styles"

import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"
import { ItemsCarousel } from "../../components/Items"

import macaronsHome from "../../assets/macarons_home.png"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export function Home(){
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  function handleSearch(valueSearch){
    setSearch(valueSearch)
  }

  useEffect (() => {
    async function fecthCategories(){
      const categoriesList = await api.get("/category");
      setCategories(categoriesList.data);
    }

    fecthCategories();
  }, [])

  return(
    <Container>
      <Header search={search} handleSearch={handleSearch} />

      <Main >
        <BannerHome>
          <img src={macaronsHome} alt="Macarons, frutas e folhas" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </BannerHome>

        {
          categories.map(category => (
            <ItemsCarousel 
              title={category.name} 
              key={category.id} 
              category_id={category.id} 
              search={search}
            />
          ))
        }

      </Main>

      <Footer />
    </Container>
  )
}