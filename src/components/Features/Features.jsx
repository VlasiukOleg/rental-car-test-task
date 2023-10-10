import { FeaturesList, FeaturesItem, ItemWrap, FeatureText} from "./Features.styled"

import { IoCarSportOutline } from "react-icons/io5";
import { RiTeamLine} from "react-icons/ri";
import { FaRegHandshake} from "react-icons/fa";
import { AiOutlineLaptop} from "react-icons/ai";

export const Features = () => {

    return (
        <>
        <FeaturesList>
            <FeaturesItem><ItemWrap><IoCarSportOutline size='24px' color=" #3470FF"/>A wide selection of high-quality vehicles.</ItemWrap></FeaturesItem>
            <FeaturesItem><ItemWrap><AiOutlineLaptop size='24px' color=" #3470FF"/>Convenient online booking service.</ItemWrap></FeaturesItem>
            <FeaturesItem><ItemWrap><RiTeamLine size='24px' color=" #3470FF"/>Professional team ready to assist.</ItemWrap></FeaturesItem>
            <FeaturesItem><ItemWrap><FaRegHandshake size='24px' color=" #3470FF"/>Experience and reputation as a reliable partner.</ItemWrap></FeaturesItem>
        </FeaturesList>
        <FeatureText>Choose us and experience these advantages for yourself!</FeatureText>
        </>
        
    )
}