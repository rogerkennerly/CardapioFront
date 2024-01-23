import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { MenuMobile } from "../MenuMobile"

import { Container, Logo, Search, Button, Logout } from "./styles"
import polygon from "../../assets/Polygon 1.svg"
import { RiSearchLine, RiFileList3Line, RiLogoutBoxRLine, RiMenuFill } from "react-icons/ri"
import { useAuth } from "../../hooks/auth"
import { useCart } from "../../hooks/cart"

export function Header({search, handleSearch}){
  const [menuMobile, setMenuMobile] = useState(false);

  function handleMenu(){
    setMenuMobile(!menuMobile);
  }

  const {signOut, user} = useAuth();
  const navigate = useNavigate();
  
  const { cart } = useCart();

  function handleSignOut(){
    signOut();
    navigate("/");
  }

  return(
    <Container>
     <MenuMobile menuVisible={menuMobile} menuFunction={handleMenu} signOut={handleSignOut} search={search} handleSearch={handleSearch} />

      <div className="headerControl">
        <RiMenuFill onClick={handleMenu} />

        <Logo>
          <NavLink to="/">
              <img src={polygon} alt="Polygon" />
              <strong>food explorer</strong>
          </NavLink>
          {user.is_admin ? <span>admin</span> : ''}
        </Logo>

        <Search>
          <RiSearchLine />
          <input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes" 
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Search>
        
        <NavLink to="/favorites">Meus favoritos</NavLink>

        { 
          user.is_admin 
          ?
          <NavLink to="/new-product">
            <Button>
              Novo prato
            </Button>
          </NavLink>
          :
          <NavLink to="/orders">
            <Button>
              <RiFileList3Line /> Pedidos {cart.length}
            </Button>
          </NavLink>
        }

        <div className="orders_mobile">
          <div className="orders_number">0</div>
          <RiFileList3Line />
        </div>

        <Logout onClick={handleSignOut}>
          <RiLogoutBoxRLine />
        </Logout>
      </div>
    </Container>
  )
}