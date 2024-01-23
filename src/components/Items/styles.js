import Carousel from "react-multi-carousel";
import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  position: relative;

  @media (max-width: 425px) {
    padding: 0 24px;
  }

  .product_container {
    position: relative;
  }

  .favorite {
    position: absolute;
    right: 18px;
    top: 18px;
    padding: 0;
    font-size: 30px;

    > favoriteActive {
    }

    @media (max-width: 425px) {
      right: 45px;
    }

    svg {
      cursor: pointer;
    }
  }

  > h2 {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 23px;

    @media (max-width: 425px) {
      font-size: 18px;
    }
  }

  > div ul li div {
    padding: 0 27px;
  }

  > div ul li div div {
    padding: 24px;

    display: flex;
    align-items: center;
    flex-direction: column;

    > a img {
      width: 176px;
      margin-bottom: 15px;

      @media (max-width: 425px) {
        width: 88px;
      }
    }

    > a h3 {
      font-family: Poppins;
      font-size: 24px;
      font-weight: 700;

      @media (max-width: 425px) {
        font-size: 14px;
      }
    }

    > span {
      margin-top: 15px;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      text-align: center;

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }

    .price {
      color: ${({ theme }) => theme.COLORS.PRICE};
      font-family: Roboto;
      font-size: 32px;
      font-weight: 400;

      @media (max-width: 425px) {
        font-size: 16px;
      }
    }

    /* .add_cart {
      display: flex;
      flex-direction: row;

      @media (max-width: 425px) {
        flex-direction: column;
        padding: 0;
        width: 100%;
      }

      > div {
        display: flex;
        flex-direction: row;

        @media (max-width: 425px) {
          padding: 20px 0;
        }

        > span {
          margin: 0;
          font-family: Roboto;
          font-size: 20px;
          font-weight: 700;
          margin: 0 10px;
        }

        > svg {
          font-size: 34px;
          cursor: pointer;
        }
      }

      > button {
        padding: 12px 24px;
        background: ${({ theme }) => theme.COLORS.BUTTON};
        border: 0;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.FONT};

        @media (max-width: 425px) {
          width: 80%;
        }
      }
    } */
  }
`;
