import styled from 'styled-components';

export const Cars = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;


export const CarItem = styled.li`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  img:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const InfoBtn = styled.button`
display: block;
width: 100%;
padding: 12px;
color: #ffffff;
background-color: #3470FF;
border-radius: 12px;
border: none;
cursor: pointer;

&:hover {
    background-color: #0B44CD;
  }


`

export const BackToTopBtn = styled.button`
position: fixed;
bottom: 20px;
right: 50px;
width: 40px;
height: 40px;
z-index: 99;
border: none;
outline: none;
border-radius: 50%;
cursor: pointer;
`

export const FavoriteBtn = styled.button`
position: absolute;
top: 10px;
right: 10px;

background-color: transparent;
border: none;
outline: none;
cursor: pointer;

`