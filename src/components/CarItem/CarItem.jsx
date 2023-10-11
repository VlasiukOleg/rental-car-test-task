
import { CarsItem, InfoBtn, FavoriteBtn,CarInfo, CompanyInfo, CarAddInfo, CarInfoWrap} from "./CarItem.styled"

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import noImage from '../../assets/images/noimage.jpeg'

export const CarItem = ({car, favorites, toogleModal, toogleToFavorite}) => {
    const handleError = (e) => {
        e.target.onerror = null; // Вимикаємо подальшу обробку помилки, щоб уникнути зациклення
        e.target.src = noImage; // Змінюємо src на дефолтне зображення у разі помилки
  }

  

    return (
        <CarsItem>
                <img src={car.img} alt={car.make} onError={handleError} width={274} height={268}/>
                <CarInfoWrap>
                    <CarInfo><div>{car.make} <span>{car.model}</span>, {car.year} </div> {car.rentalPrice}</CarInfo>
                    <CompanyInfo> {car.address} | {car.rentalCompany}</CompanyInfo>
                    <CarAddInfo> {car.type} | {car.mileage} | {car.accessories[0]}</CarAddInfo>
                </CarInfoWrap>
                <InfoBtn type='button' onClick={() => toogleModal(car)}>Learn More</InfoBtn>
                <FavoriteBtn onClick={() => toogleToFavorite(car)}>{favorites.find(favCar => favCar.id === car.id) ?  <AiFillHeart size='24px' color='#3470FF'/> : <AiOutlineHeart size='24px' color='#ffffff'/>}</FavoriteBtn>
        </CarsItem>   
    )
}