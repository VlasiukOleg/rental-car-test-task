import { Logo, Nav, PhoneLink, MainLink } from "./Header.styled"

import { FcPhoneAndroid } from "react-icons/fc";
import { PiBuildingsDuotone} from "react-icons/pi";

export const Header = () => {
    return (
        <>
        <Logo to='/'><PiBuildingsDuotone/>Rental<span>Car</span></Logo>
        <Nav>
            <ul>
                <li><MainLink >Cars</MainLink ></li>
                <li><MainLink >Favorite</MainLink ></li>
            </ul>  
        </Nav>
        <PhoneLink to="tel:+380632790437"><FcPhoneAndroid size='24px'/>(063) 279 04 37</PhoneLink>
        </>
    )
}