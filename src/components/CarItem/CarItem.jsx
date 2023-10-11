
import { CarsItem, InfoBtn, FavoriteBtn } from "./CarItem.styled"

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import noImage from '../../assets/images/noimage.jpeg'

export const CarItem = ({car, favorites, toogleModal, toogleToFavorite}) => {
    const handleError = (e) => {
        e.target.onerror = null; // Вимикаємо подальшу обробку помилки, щоб уникнути зациклення
        e.target.src = noImage; // Змінюємо src на дефолтне зображення у разі помилки
  }

  

    return (
        <CarsItem key={car.id}>
                <img src={car.img} alt={car.make} onError={handleError} width={274} height={268}/>
                <p> {car.make} {car.model} {car.year} {car.rentalPrice}</p>
                <p> {car.address} {car.rentalCompany}</p>
                <p> {car.type} {car.mileage} {car.accessories[0]}</p>
                <InfoBtn type='button' onClick={() => toogleModal(car)}>Learn More</InfoBtn>
                <FavoriteBtn onClick={() => toogleToFavorite(car)}>{favorites.find(favCar => favCar.id === car.id) ?  <AiFillHeart size='24px' color='#3470FF'/> : <AiOutlineHeart size='24px' color='#ffffff'/>}</FavoriteBtn>
        </CarsItem>   
    )
}