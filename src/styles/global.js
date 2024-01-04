import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    color: ${({ theme }) => theme.COLORS.FONT};

    -webkit-font-smoothing: antialiased;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button, a:hover{
    filter: brightness(0.8);
  }
`;
