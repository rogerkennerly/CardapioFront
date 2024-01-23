import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 77px;
  padding: 24px 0;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      color: #fffaf1;
      @media (max-width: 425px) {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 206px;
  color: #4d585e;

  > div {
    display: flex;
    gap: 12px;
    display: flex;
    align-items: center;

    > img {
      width: 30px;

      @media (max-width: 425px) {
        width: 22px;
      }
    }

    > strong {
      font-size: 24px;

      @media (max-width: 425px) {
        font-family: Roboto;
        font-size: 15.262px;
        font-weight: 700;
      }
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
