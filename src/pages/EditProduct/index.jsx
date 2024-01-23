import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import {priceFormatter} from "../../utils/formatter"

import {Header} from "../../components/Header"
import {Main} from "../../components/Main"
import {Footer} from "../../components/Footer"
import {BackButton} from "../../components/BackButton"

import { RiUpload2Line } from "react-icons/ri";
import { useState, useEffect } from "react";

export function EditProduct(){
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();

  const {id} = useParams();

  let ingredientList = ''; 

  if(ingredients){
    ingredients.map(ingredient => {
      ingredientList += `${ingredient.name}, `;
    })
  }

  async function handleUpdate(){
    const response = await api.patch(`/products/${id}`, {name, category_id: category, ingredients, price, description});

    if(image){
      const fileUploadForm = new FormData();
      fileUploadForm.append("img", image);

      const response = await api.patch(`/products/${id}`, fileUploadForm)
    }

    if(response.request.response){
      alert(response.request.response);
    } else {
      alert("Erro ao salvar os dados.");
    }
  }

  async function handleChangeImage(event){
    const file = event.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  }

  useEffect(() => {
    async function fetchCategories(){
      const categoriesList = await api.get("/category");
      setCategories(categoriesList.data);
    }
    
    async function getProduct(id){
      const product = await api.get(`products/${id}`);
      setName(product.data.name);
      setCategory(product.data.category_id);
      setIngredients(product.data.ingredients);
      setPrice(product.data.price);
      setDescription(product.data.description);
      // setImage(product.data.image);
      setImageUrl(product.data.image ? `${api.defaults.baseURL}/files/${product.data.image}` : `${api.defaults.baseURL}/files/no_image.jpg`);
    }
    getProduct(id);
    fetchCategories();

  }, []);
  
  return(
    <Container>
      <Header />

      <Main>
        <BackButton />

        <h1>Editar prato</h1>

        <div className="form">
          <div className="flex">
            <div className="input_form input_form_file">
              <label>Imagem do prato</label>
              <label htmlFor="image" className="image_label">
                <img src={imageUrl} alt="" width="150" />
                 Selecione Imagem
                
              </label>
              <input 
                type="file" 
                className="input_file" 
                name="" 
                id="image" 
                onChange={handleChangeImage}
              />
            </div>

            <div className="input_form input_form_name">
              <label>Nome</label>
              <input 
                type="text" 
                className="input" 
                name="" 
                id="image" 
                placeholder="Ex: Salada Ceasar" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            
            <div className="input_form input_form_cat">
              <label>Categoria</label>
              <select name="" id="" className="input" value={category} defaultValue={category} onChange={e => setCategory(e.target.value)}>
                {
                  categories.length > 0
                  &&
                  categories.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="flex">
            <div className="input_form input_form_ingredients">
              <label>Ingredientes</label>
              <input 
                type="text" 
                className="input" 
                name="" 
                id="image" 
                placeholder="Ex: Salada Ceasar" 
                value={ingredientList.substring(0, ingredientList.length - 2)}
                onChange={e => setIngredients(e.target.value)}
              />
            </div>

            <div className="input_form input_form_price">
              <label>Preço</label>
              <input 
                type="text" 
                className="input" 
                name="" 
                id="image" 
                placeholder="R$ 00,00" 
                value={price ? priceFormatter(price): ''}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="input_form input_form_description">
              <label>Descrição</label>
              <textarea 
                name="" 
                className="input" 
                value={description} 
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>

          <button className="save_button" onClick={handleUpdate}>
            Salvar alterações
          </button>
        </div>
      </Main>
      
      <Footer />
    </Container>
  )
}