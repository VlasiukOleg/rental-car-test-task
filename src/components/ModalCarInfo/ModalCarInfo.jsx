
import { CustomModal } from "components/CustomModal/CustomModal";

import { RentalCarLink, CarImgWrap, CarModelInfo, CarAddress, CarEngineInfo, CarDescription, CarAccessoriesTitle, 
  CarAccessoriesInfo, CarFunctionalitiesInfo, CarRentalConditionsTitle, CarRentalConditionsList, CarRentalConditionsItem, 
  CarMileage, CarPrice, CarMileagePriceWrap, LinkWrap} from "./ModalCarInfo.styled";


  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  


export const ModalCarInfo = ({onToogle, carInfo}) => {

    return (
        <CustomModal onClose={onToogle}
        modalStyles={{
          borderRadius: '12px',
          border: '1px solid rgba(239, 237, 232, 0.20)',
          backgroundColor: '#ffffff',
        }}
        modalDesktopStyles={{
          width: '541px',
          padding: '20px  20px',
        }}>
        <CarImgWrap><img src={carInfo.img} alt={carInfo.make}/></CarImgWrap>
        <CarModelInfo> {carInfo.make} <span>{carInfo.model}</span> , {carInfo.year}</CarModelInfo>
        <CarAddress>{carInfo.address} | ID: {carInfo.id} | Year: {carInfo.year} | Type: {carInfo.type}</CarAddress>
        <CarEngineInfo> FuelConsumption: {carInfo.fuelConsumption} | EngineSize: {carInfo.engineSize}</CarEngineInfo>
        <CarDescription>{carInfo.description}</CarDescription>
        <CarAccessoriesTitle>Accessories and functionalities:</CarAccessoriesTitle>
        <CarAccessoriesInfo>{carInfo.accessories.join(' | ')}</CarAccessoriesInfo>
        <CarFunctionalitiesInfo>{carInfo.functionalities.join(' | ')}</CarFunctionalitiesInfo>
        <CarRentalConditionsTitle>Rental Conditions:</CarRentalConditionsTitle>
        <CarRentalConditionsList>{carInfo.rentalConditions.split('\n').map((item, index) => <CarRentalConditionsItem key={index}>{item}</CarRentalConditionsItem>)}</CarRentalConditionsList>
        <CarMileagePriceWrap>
          <CarMileage>Mileage: <span>{addCommas(carInfo.mileage)}</span></CarMileage>
          <CarPrice> Price: <span>{carInfo.rentalPrice}</span></CarPrice>
        </CarMileagePriceWrap>
        
        <LinkWrap><RentalCarLink to="tel:+380730000000">Rental Car</RentalCarLink></LinkWrap>

        
            
        </CustomModal>
    )
}