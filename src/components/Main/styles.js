import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 130px 0 150px;

  @media (max-width: 425px) {
    padding: 130px 32px 150px;
  }
`;
