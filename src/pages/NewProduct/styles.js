import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
    margin: 24px 0 32px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 32px;

    @media (max-width: 425px) {
      flex-direction: column;
    }
  }

  .input_form {
    display: inline-flex;
    flex-direction: column;

    > label {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 16px;
    }

    .input_file {
      display: none;
    }

    .image_label {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
      padding: 12px 32px;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 8px;

      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 8px;
    }

    .input {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
      padding: 12px 14px;
      border: 0;
      border-radius: 8px;
      color: ${({ theme }) => theme.COLORS.FONT_LIGHT};
      resize: none;
    }

    > textarea {
      height: 172px;
    }
  }

  .save_button {
    padding: 12px 24px;
    border: 0;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_LIGHT};
    color: ${({ theme }) => theme.COLORS.FONT};
    border-radius: 5px;
    float: right;
  }

  .input_form_file {
    width: 22%;
  }

  .input_form_name {
    width: 48%;
  }

  .input_form_cat {
    width: 30%;
  }

  .input_form_ingredients {
    width: 80%;
  }

  .input_form_price {
    width: 20%;
  }

  .input_form_description {
    width: 100%;
  }

  @media (max-width: 425px) {
    .input_form_file,
    .input_form_name,
    .input_form_cat,
    .input_form_ingredients,
    .input_form_price,
    .input_form_description {
      width: 100%;
    }

    .image_label {
      margin-bottom: 0 !important;
    }
  }
`;
