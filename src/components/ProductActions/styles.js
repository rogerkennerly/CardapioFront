import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row !important;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
  }

  .carLine {
    display: flex;
    flex-direction: row !important;
    align-items: center !important;

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
`;
