import { NavLink } from "react-router-dom";

import { Container } from "./styles";
import { RiCloseFill, RiSearch2Line } from "react-icons/ri";

export function MenuMobile({ menuVisible, menuFunction, signOut, handleSearch }){

  function formSubmit(event){
    event.preventDefault();
    menuFunction();
  }

  return (
    
    <>
    {
      menuVisible
      &&
      <Container>
        <div className="close_menu">
          <RiCloseFill onClick={menuFunction} />
          Menu
        </div>

        <div className="search_menu">
          <RiSearch2Line />
          <form action="" onSubmit={formSubmit}>
            <input 
              type="text" 
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => handleSearch(e.target.value)}
            />
          </form>
        </div>

        <ul>
          <NavLink to="/new-product"><li>Novo prato</li></NavLink>
          <NavLink to="#" onClick={signOut}><li >Sair</li></NavLink>
        </ul>
      </Container>
    }
    </>
  )
}