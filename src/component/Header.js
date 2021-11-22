import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-width: 66.5rem;
  margin: 0 auto;
  flex-basis: 50%;
  @media only screen and (min-width: 800px) {
    text-align: start;
    padding-right: 5rem;
    justify-content: flex-end;
    margin: 0 0;
  }
  h1 {
    color: white;
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 4.5rem;
    margin-top: 11rem;
    margin-bottom: 4rem;

    @media only screen and (min-width: 800px) {
      font-size: 6rem;
      line-height: 7rem;
    }
  }
  p {
    color: white;
    margin-bottom: 8rem;
  }
`;

export const Header = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};
