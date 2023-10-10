import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';



export const HeaderBar = styled.header`
max-width: 1440px;
margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid  #696969;
  padding: 0px 20px;
`;




export const Logo = styled(NavLink)`
  display: flex;
 justify-content: center;
 align-items: center;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #696969;
  font-size: 20px;

  span {
    color: #3470FF;
  }
`

export const Nav = styled.nav`
    ul {
        display: flex;
    justify-content: center;
    align-items: center;
    }
    
`

export const MainLink = styled(NavLink)`
    display: inline-block;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 4px;
  font-weight: 700;
  color: #696969;

  &:hover {
    color: #3470FF;
  }

  &.active {
    color: #ffffff;
    background-color: #3470FF;
  }
`

export const PhoneLink = styled(NavLink)`
 display: flex;
 justify-content: center;
 align-items: center;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #696969;
  
`


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingLogo = styled.div`
    margin-right: 4px;
    width: 24px;
    height: 24px;
    animation: ${rotate360} 7s linear infinite; 
`;