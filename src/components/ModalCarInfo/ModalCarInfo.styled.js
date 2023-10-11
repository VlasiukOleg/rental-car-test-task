import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



export const LinkWrap = styled.div`
display: flex;
margin-top: 24px;
`


export const RentalCarLink = styled(NavLink)`
display: inline-block;
padding: 12px 50px;

color: #ffffff;
background-color: #3470FF;
border-radius: 12px;
border: none;
cursor: pointer;

&:hover {
    background-color: #0B44CD;
  }
`


export const CarImgWrap = styled.div`
max-width: 468px;
height: 248px;
border-radius: 10px;
overflow: hidden;

img {
    width: 100%;
    height: 248px;
    object-fit: cover;
}
`

export const CarModelInfo =styled.p`
font-weight: 500;
font-size: 18px;
margin-top: 14px;
margin-bottom: 8px;

text-align: left;

span {
    color: #0B44CD;
}
`

export const CarAddress = styled.p`
font-size: 12px;
color: rgb(18,20,23, 50%);
text-align: left;
margin-bottom: 8px;
`

export const CarEngineInfo = styled.p`
font-size: 12px;
color: rgb(18,20,23, 50%);
text-align: left;
margin-bottom: 8px;
`

export const CarDescription = styled.p`
font-size: 14px;
text-align: left;
margin-bottom: 24px;
`

export const CarAccessoriesTitle = styled.p`
font-size: 14px;
font-weight: 500;
text-align: left;
margin-bottom: 8px;
`

export const CarAccessoriesInfo = styled.p`
font-size: 12px;
color: rgb(18,20,23, 50%);
text-align: left;
margin-bottom: 8px;
`
export const CarFunctionalitiesInfo = styled.p`
font-size: 12px;
color: rgb(18,20,23, 50%);
text-align: left;
margin-bottom: 24px;
`


export const CarRentalConditionsTitle = styled.p`
font-size: 14px;
font-weight: 500;
text-align: left;
margin-bottom: 8px;
`


export const CarRentalConditionsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;        
`

export const CarRentalConditionsItem = styled.li`
padding: 7px 14px;
background-color: #F9F9F9;
border-radius: 35px;
margin-right: 8px;
margin-bottom: 8px;

`

export const CarMileagePriceWrap = styled.div`
display: flex;`

export const CarMileage = styled.p`
font-size: 12px;  
padding: 7px 14px;
background-color: #F9F9F9;
text-align: left;
border-radius: 35px;
margin-right: 8px;

span {
    font-weight: 500;
    color: #3470FF;
}
`


export const CarPrice = styled.p`
font-size: 12px;  
padding: 7px 14px;
background-color: #F9F9F9;
border-radius: 35px;
margin-right: 8px;

span {
    font-weight: 500;
    color: #3470FF;
}
`