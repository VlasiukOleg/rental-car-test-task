import styled from 'styled-components';


export const CarsItem = styled.li`
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
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;

export const CarInfoWrap = styled.div`
padding: 14px 4px 28px 4px;
`

export const CarInfo = styled.div`
display: flex;
justify-content: space-between;
font-weight: 500;
margin-bottom: 8px;

span {
    color: #0B44CD;
}
`

export const CompanyInfo = styled.p`
font-size: 12px;
color: rgb(18,20,23, 50%);
margin-bottom: 4px;
`

export const CarAddInfo = styled.p`
font-size: 12px;
color: rgb(18,20,23, 50%);
`

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


export const FavoriteBtn = styled.button`
position: absolute;
top: 10px;
right: 10px;

background-color: transparent;
border: none;
outline: none;
cursor: pointer;

`