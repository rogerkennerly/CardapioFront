import { styled } from "styled-components";

export const Container = styled.div`
  > div h1 {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
  }

  .productList {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: 32px 0;
  }

  .product {
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
      width: 100px;
    }

    > div h3 {
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
    }

    > div span {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      color: #ab4d55;
      cursor: pointer;
    }

    .price {
      color: ${({ theme }) => theme.COLORS.PRICE};
    }
  }

  .total {
    margin-top: 30px;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 500;
  }
`;
