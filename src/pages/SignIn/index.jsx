import { useState } from "react";

import { Container, FormContainer, Logo } from "./styles";
import polygon from "../../assets/Polygon 1.svg"
import { Button } from "../../components/Button/Index";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
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
          <h1>Faça login</h1>

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

          <Button text="Entrar" onClick={handleSignIn} />

          <Link to="/register">Criar uma conta</Link>
        </div>
      </FormContainer>
    </Container>
  )
}