import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const BannerHome = styled.div`
  width: 1120px;
  height: 260px;
  background-color: #05151c;
  border-radius: 8px;
  margin-top: 240px;
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    height: 120px;
    margin-top: 0;
  }

  display: flex;
  align-items: center;

  > div {
    > h1 {
      font-size: 40px;
      font-family: Poppins;
      font-weight: 500;

      @media (max-width: 425px) {
        font-size: 18px;
        font-weight: 600;
      }
    }
    > span {
      font-size: 16px;
      font-family: Roboto;
      font-weight: 400;

      @media (max-width: 425px) {
        font-size: 12px;
        line-height: 140%;
        display: block;
        margin-top: 3px;
      }
    }
  }

  img {
    align-self: end;
    @media (max-width: 425px) {
      width: 45%;
    }
  }
`;
