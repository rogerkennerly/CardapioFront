import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 77px);
  z-index: 1000;
  padding: 56px 28px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

  @media (min-width: 426px) {
    display: none;
  }

  .close_menu {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;

    > svg {
      font-size: 36px;
    }
  }

  .search_menu {
    width: 100%;
    height: 48px;
    padding: 12px 14px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    border-radius: 5px;
    border: 0;
    margin-top: 60px;

    display: flex;
    align-items: center;
    gap: 14px;

    > svg {
      font-size: 22px;
    }

    > form {
      width: 100%;
    }

    > form input {
      border: 0;
      background-color: transparent;
      width: 100%;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.FONT};

      &:focus {
        outline: 0;
      }
    }
  }

  ul {
    margin-top: 36px;

    li {
      list-style: none;
      padding: 10px;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 300;
      border-bottom: 1px solid #192227;
    }
  }
`;
