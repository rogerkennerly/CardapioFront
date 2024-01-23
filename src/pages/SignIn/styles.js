import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  margin: 0 auto;
  height: 100vh;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 73px;
    width: 100%;
    padding: 0 47px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: center;
  font-family: Roboto;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 37px;
  }

  > div {
    display: flex;
    gap: 12px;

    > img {
      width: 49px;
    }
  }
`;

export const FormContainer = styled.div`
  @media (max-width: 425px) {
    width: 100%;
  }

  .form {
    background-color: #001119;
    width: 476px;
    border-radius: 16px;
    padding: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 425px) {
      width: 100%;
      padding: 0;
      background-color: transparent;
    }

    > h1 {
      font-family: Poppins;
      font-size: 32px;
      font-weight: 500;
    }

    .input_form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 32px;
      gap: 8px;

      > label {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
      }

      > input {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.FONT_LIGHT};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
        border: 0;
        border-radius: 8px;
        padding: 12px 14px;
      }
    }

    > a {
      text-align: center;
      margin-top: 32px;
    }
  }
`;
