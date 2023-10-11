import { FeaturesList, FeaturesItem, ItemWrap, FeatureText} from "./Features.styled"

import { IoCarSportOutline } from "react-icons/io5";
import { RiTeamLine} from "react-icons/ri";
import { FaRegHandshake} from "react-icons/fa";
import { AiOutlineLaptop} from "react-icons/ai";

export const Features = () => {

    return (
        <>
        <FeaturesList>
            <FeaturesItem><ItemWrap><IoCarSportOutline size='30px' color=" #3470FF"/><span>A wide selection of high-quality vehicles.</span></ItemWrap></FeaturesItem>
            <FeaturesItem><ItemWrap><AiOutlineLaptop size='30px' color=" #3470FF"/><span>Convenient online booking service.</span></ItemWrap></FeaturesItem>
            <FeaturesItem><ItemWrap><RiTeamLine size='30px' color=" #3470FF"/><span>Professional team ready to assist.</span></ItemWrap></FeaturesItem>
            <FeaturesItem><ItemWrap><FaRegHandshake size='30px' color=" #3470FF"/><span>Experience and reputation as a reliable partner.</span></ItemWrap></FeaturesItem>
        </FeaturesList>
        <FeatureText>Choose us and experience these advantages for yourself!</FeatureText>
        </>
        
    )
}