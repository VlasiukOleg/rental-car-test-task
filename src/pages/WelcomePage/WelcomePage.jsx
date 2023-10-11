import { Container } from "components/Container/Container";
import { Features } from "components/Features/Features";

import {WelcomeTitle, WelcomePageWrap, LogoWrap} from './WelcomePage.styled';

const WelcomePage = () => {
    return (
        <Container>
            <WelcomePageWrap>
                <WelcomeTitle>Discover the freedom of the open road with <LogoWrap>Rent <span>-and-</span> Ride! </LogoWrap> </WelcomeTitle>
                <Features/>
            </WelcomePageWrap>  
        </Container>
        
    )
}


export default WelcomePage;