
import { CustomModal } from "components/CustomModal/CustomModal";

import { RentalCarLink } from "./ModalCarInfo.styled";


export const ModalCarInfo = ({onToogle, carInfo}) => {
    

    return (
        <CustomModal onClose={onToogle}
        modal320Styles={{
          width: '87vw',
        }}
        modalStyles={{
          maxWidth: '335px',
          height: '280px',
          padding: '48px  24px',
          borderRadius: '12px',
          border: '1px solid rgba(239, 237, 232, 0.20)',
          backgroundColor: '#ffffff',
        }}
        modalTabletStyles={{
          maxWidth: '479px',
          height: '286px',
          padding: '48px  32px',
        }}
        modalDesktopStyles={{
          maxWidth: '479px',
          height: '286px',
          padding: '48px  32px',
        }}>
        <img src={carInfo.img} alt="" width={260} height={200}/>
        <p> {carInfo.make} {carInfo.model} {carInfo.year}</p>
        <p>{carInfo.address} ID: {carInfo.id} Year: {carInfo.year} Type: {carInfo.type}</p>
        <p> FuelConsumption: {carInfo.fuelConsumption} EngineSize: {carInfo.engineSize}</p>
        <p>{carInfo.description}</p>
        <p>Accessories and functionalities:</p>
        <p>{carInfo.accessories} {carInfo.functionalities}</p>
        <p>Rental Conditions:</p>
        <p>{carInfo.rentalConditions}</p>
        <p>Mileage: {carInfo.mileage} Price: {carInfo.rentalPrice}</p>
        <RentalCarLink to="tel:+380730000000">Rental Car</RentalCarLink>


            
        </CustomModal>
    )
}