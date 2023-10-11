import styled from 'styled-components';


export const FeaturesList = styled.ul`
display: flex;
gap: 15px;
justify-content: center;
align-items: center;
text-align: center;

`

export const ItemWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;


    span {
        margin-top: 15px;
    }
`

export const FeaturesItem = styled.li`
font-size: 16px;
color: #696969;
max-width: 200px;
padding: 20px;

border: 1px solid  #3470FF ;
border-radius: 10px;


`

export const FeatureText = styled.p`
text-align: center;
margin-top: 80px;
font-size: 28px;
font-weight: 500;

`
