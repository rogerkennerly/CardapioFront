import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ProductContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 100px;

  @media (max-width: 425px) {
    padding: 36px;
    margin-top: 50px;
  }

  .product {
    display: flex;
    gap: 48px;
    margin: 42px 0;

    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;

    > img {
      width: 100%;
      max-width: 400px;
    }

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      padding: 16px 26px 26px;
      margin: 0;
      gap: 16px;

      > img {
        width: 100%;
      }
    }

    .product_details {
      padding: 45px 0;

      > h1 {
        font-size: 40px;
        font-weight: 500;

        @media (max-width: 425px) {
          font-family: Poppins;
          font-size: 27.041px;
          text-align: center;
        }
      }

      .description {
        margin: 24px 0;

        @media (max-width: 425px) {
          font-size: 16.225px;
          text-align: center;
        }
      }

      .tags {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;

        @media (max-width: 425px) {
          justify-content: center;
        }

        > span {
          font-family: Poppins;
          font-size: 14px;
          font-weight: 500;
          border-radius: 5px;

          text-align: center;
          padding: 4px 8px;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
        }
      }

      .add_cart {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 48px;

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

        > button {
          padding: 12px 24px;
          background: ${({ theme }) => theme.COLORS.BUTTON};
          border: 0;
          border-radius: 5px;
          color: ${({ theme }) => theme.COLORS.FONT};
          margin-left: 10px;
        }
      }
    }
  }
`;
