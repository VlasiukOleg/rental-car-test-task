import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const RentalCarLink = styled(NavLink)`
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