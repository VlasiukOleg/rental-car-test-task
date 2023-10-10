import { Logo, Nav, PhoneLink, MainLink, HeaderBar, RotatingLogo } from "./Header.styled"

import { FcPhoneAndroid } from "react-icons/fc";
import { GiCartwheel } from "react-icons/gi";

export const Header = () => {
    return (
        <HeaderBar>
        <Logo to='/'><RotatingLogo><GiCartwheel size='24px'/></RotatingLogo>Rent <span>-and-</span> Ride</Logo>
        <Nav>
            <ul>
                <li><MainLink to='/catalog'>Cars</MainLink ></li>
                <li><MainLink to='/favorite'>Favorite</MainLink ></li>
            </ul>  
        </Nav>
        <PhoneLink to="tel:+380730000000"><FcPhoneAndroid size='24px'/>(073) 000 00 00</PhoneLink>
        </HeaderBar>
    )
}