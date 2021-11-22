import { Fragment } from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './Global';
import { Header } from '../component/Header';
import { Button } from '../component/UI/Button';
import { Form } from '../component/Form';

const ContentWrapper = styled.main`
  @media only screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
  }
`;
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  @media only screen and (min-width: 800px) {
    margin-bottom: 0;
    padding-left: 2rem;
    justify-content: center;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <ContentWrapper>
        <Header>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
            understanding how developers think is invaluable.
          </p>
        </Header>
        <CTA>
          <Button>
            <span>Try it free 7 days </span> then $20/mo. thereafter
          </Button>
          <Form />
        </CTA>
      </ContentWrapper>

      <p className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . <br />
        Coded by{' '}
        <a href='https://github.com/JasonYang840723' target='_blank'>
          Yu Yang
        </a>
        .
      </p>
    </Fragment>
  );
}

export default App;
