import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  position: fixed;
  top: 0;
  z-index: 1;
  height: 96px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  color: ${({ theme }) => theme.COLORS.FONT};

  padding: 24px 0;

  @media (max-width: 425px) {
    padding: 40px 28px 28px;
    height: auto;
  }

  .headerControl {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
      font-size: 36px;
    }

    .orders_mobile {
      font-size: 36px;
      display: flex;
      align-items: center;
      position: relative;

      @media (min-width: 426px) {
        display: none;
      }

      .orders_number {
        position: absolute;
        right: -4px;
        top: -7px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        background-color: ${({ theme }) => theme.COLORS.BUTTON};
        padding: 2px 8px;
        border-radius: 50%;
      }
    }

    @media (min-width: 426px) {
      > svg {
        display: none;
      }
    }

    @media (max-width: 425px) {
      > a {
        display: none;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 206px;

  > a {
    display: flex;
    gap: 12px;

    > img {
      width: 30px;
    }

    > strong {
      font-size: 24px;
    }
  }

  > span {
    position: absolute;
    right: 0;
    top: 30px;
    color: ${({ theme }) => theme.COLORS.PRICE};
    font-size: 12px;
  }
`;

export const Search = styled.div`
  width: 441px;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};

  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-size: 16px;

  @media (max-width: 426px) {
    display: none;
  }

  > svg {
    font-size: 24px;
  }

  > input {
    background-color: transparent;
    border: 0;
    width: 254px;
    outline: 0;
    color: ${({ theme }) => theme.COLORS.FONT};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 216px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  color: ${({ theme }) => theme.COLORS.BUTTON_FONT};

  border: 0;
  text-align: center;
  line-height: 24px;

  border-radius: 5px;

  > svg {
    font-size: 24px;
  }

  @media (max-width: 426px) {
    display: none;
  }
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    font-size: 30px;
  }

  @media (max-width: 426px) {
    display: none;
  }
`;
