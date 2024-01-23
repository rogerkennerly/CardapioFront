import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  color: ${({ theme }) => theme.COLORS.BUTTON_FONT};

  border: 0;
  text-align: center;
  line-height: 24px;

  border-radius: 5px;
  margin-top: 32px;
  padding: 12px 0;
`;
