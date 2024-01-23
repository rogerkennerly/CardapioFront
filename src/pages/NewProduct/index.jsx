import { Container } from "./styles";

import {Header} from "../../components/Header"
import {Main} from "../../components/Main"
import {Footer} from "../../components/Footer"
import {BackButton} from "../../components/BackButton"

import { RiUpload2Line } from "react-icons/ri";

import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NewProduct(){
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();

  const navigate = useNavigate();

  async function handleNewProduct(){ 
    if(!category){
      alert("Selecione a categoria");
      return;
    }

    const fileUploadForm = new FormData();
    fileUploadForm.append("name", name);
    fileUploadForm.append("category_id", category);
    fileUploadForm.append("ingredients", ingredients);
    fileUploadForm.append("price", price);
    fileUploadForm.append("description", description);

    if(image){
      fileUploadForm.append("img", image);
    }

    const response = await api.post("/products", fileUploadForm);

    if(response.request.response){
      alert(response.request.response);
      setName("");
      setCategory("");
      setIngredients("");
      setPrice("");
      setDescription("");
      setImage("");
      setImageUrl("");
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
  
    fetchCategories();
  }, [])

  return(
    <Container>
      <Header />

      <Main>
        <BackButton />

        <h1>Adicionar prato</h1>

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
              <select name="" id="" className="input" onChange={e => setCategory(e.target.value)}>
              <option key="0" value="0">Selecione uma categoria</option>
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
                value={ingredients}
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
                value={price}
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
                id="" 
                cols="30" 
                rows="10"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>

          <button className="save_button" onClick={handleNewProduct}>
            Salvar alterações
          </button>
        </div>
      </Main>
      
      <Footer />
    </Container>
  )
}