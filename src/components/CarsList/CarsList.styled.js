import styled from 'styled-components';

export const Cars = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;




export const BackToTopBtn = styled.button`
padding: 10px;
position: fixed;
bottom: 40px;
right: 70px;
height: 40px;
z-index: 99;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
`

