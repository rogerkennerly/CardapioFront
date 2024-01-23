import {Container} from "./styles"

export function Button({text, ...props}){
  return(
  <Container type="button" {...props} >
    {text}
  </Container>
  )
}