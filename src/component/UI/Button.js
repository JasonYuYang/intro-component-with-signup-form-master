import styled, { css } from 'styled-components';

const HeaderButtonStyles = ({ isFormButton }) => {
  if (isFormButton) {
    return css`
      height: 7rem;
      width: 100%;
      border: 1px solid #55ab86;
      border-bottom-width: 3px;
      background-color: hsl(154, 59%, 51%);
      color: white;
      letter-spacing: 1px;
      font-size: 1.8rem;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      border-radius: 6px;
      outline: none;
      margin-bottom: 2rem;
      &:hover {
        border-color: #6bc49d;
        background-color: hsl(154, 70%, 58%);
      }

      &:active {
        transform: scale(0.95);
      }
    `;
  } else {
    return css`
      max-width: 68.75rem;
      box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);
      padding: 2.5rem 6rem;
      margin-bottom: 3rem;
      border-radius: 10px;
      background-color: hsl(248, 32%, 49%);
      color: white;
      font-weight: 300;
      text-align: center;
      transition: all 0.5s;
      cursor: pointer;
      @media only screen and (min-width: 800px) {
        width: 100%;
      }
      &:hover {
        background-color: hsl(248, 44%, 58%);
      }
      span {
        font-weight: 500;
      }
      p {
        font-weight: 300;
      }
    `;
  }
};

export const Button = styled.button`
  ${HeaderButtonStyles}
`;
