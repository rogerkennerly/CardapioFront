import { useState } from "react";

import { Container, FormContainer, Logo } from "./styles";
import polygon from "../../assets/Polygon 1.svg"
import { Button } from "../../components/Button/Index";
import { Link } from "react-router-dom";

import {api} from "../../services/api"

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(){
    if(!name || !email || !password){
      alert("Preencha todos os campos!");
      return;
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível cadastrar.")
      }
    });
  }

  return (
    <Container>
      <Logo>
        <div>
          <img src={polygon} alt="Polygon" />
          <strong>food explorer</strong>
        </div>
      </Logo>

      <FormContainer>
        <div className="form">
          <h1>Crie sua conta</h1>

          <div className="input_form">
            <label htmlFor="">Seu nome</label>
            <input 
              type="text" 
              placeholder="Exemplo: Maria da Silva" 
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input_form">
            <label htmlFor="">Email</label>
            <input 
              type="mail" 
              placeholder="Exemplo: exemplo@exemplo.com.br" 
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="input_form">
            <label htmlFor="">Senha</label>
            <input 
              type="password" 
              placeholder="No mínimo 6 caracteres" 
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button text="Criar conta" onClick={handleSignUp} />

          <Link to="/">Ja tenho conta</Link>
        </div>
      </FormContainer>
    </Container>
  )
}