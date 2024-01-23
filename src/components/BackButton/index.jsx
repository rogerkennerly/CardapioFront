import {Container} from "./styles"
import { RiArrowLeftSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export function BackButton(){
  return (
    <Container>
        <NavLink to="#" onClick={() => history.back()}>
          <RiArrowLeftSLine />
          voltar
        </NavLink>
    </Container>
  )
}