import { Container, Logo } from "./styles"
import polygon from "../../assets/Polygon 2.svg"

export function Footer(){
  return (
    <Container>
      <div>
        <Logo>
          <div>
            <img src={polygon} alt="Polygon" />
            <strong>food explorer</strong>
          </div>
        </Logo>

        <span className="rights">© 2024 - Todos os direitos reservados.</span>
      </div>
    </Container>
  )
}