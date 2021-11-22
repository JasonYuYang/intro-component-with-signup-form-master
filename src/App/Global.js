import { createGlobalStyle } from 'styled-components';
import bgMobile from '../images/bg-intro-mobile.png';
import bgDesktop from '../images/bg-intro-desktop.png';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  list-style: none;
}
html{
  font-size:50%;
}

body {
  padding: 0 3rem;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background: url(${bgMobile}),hsl(0, 100%, 74%);
  font-family: Poppins, sans-serif;
  background-size: 100%;
  background-repeat: repeat;
  font-size:2rem;
  @media  only screen and (min-width:800px){
    background: url(${bgDesktop}),hsl(0, 100%, 74%);
    padding:0 5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}

ol,
ul {
  list-style: none;
  padding: 0;
}

a {
  outline: none;
  text-decoration: none;
}


img {
  display: block;
  max-width: 100%;
}

input,
button,
textarea {
  border: none;
  font: inherit;
  outline: none;
}

button {
  background: none;
  color: inherit;
  cursor: pointer;
}
.attribution { 
  margin-bottom:2rem;
  font-size: 11px; 
  text-align: center;
  color:white;
  @media  only screen and (min-width:800px){
position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
  }
  
}
 a { color: hsl(228, 45%, 44%); }
`;
