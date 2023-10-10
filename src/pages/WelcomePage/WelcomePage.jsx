import { Container } from "components/Container/Container";
import { Features } from "components/Features/Features";

import {WelcomeTitle} from './WelcomePage.styled';

const WelcomePage = () => {
    return (
        <Container>
            <WelcomeTitle>Discover the freedom of the open road with  Rent <span>-and-</span> Ride! </WelcomeTitle>
            <Features/>
        </Container>
        
    )
}


export default WelcomePage;