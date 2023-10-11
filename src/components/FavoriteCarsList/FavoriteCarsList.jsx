import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ModalCarInfo } from 'components/ModalCarInfo/ModalCarInfo';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { useEffect, useState } from 'react';

import { Cars, CarItem,InfoBtn, BackToTopBtn, FavoriteBtn} from './FavoriteCarsList.styled';

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";


export const FavoriteCarsList = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isBackToTop, setIsBackToTop] = useState(false);
    const [favorites, setFavorites] = useLocalStorage('favorite', []);


    const toogleModal = (car) => {
        setIsModalOpen(prevState => !prevState);
        setSelectedCar(car);
     };

     const toogleToFavorite = (car) => {
      
      if (!favorites.find(favCar => favCar.id === car.id)) {
        setFavorites([...favorites, car]);
      } else {
        const updatedFavorites = favorites.filter(favCar => favCar.id !== car.id);
        setFavorites(updatedFavorites);
        Notify.failure('Successfully removed from favorites');
      }
     }

     const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };


    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);

    return (
        <>
        <Cars id="catalog">
             {favorites?.map(car => (
             <CarItem key={car.id}>
                <img src={car.img} alt="" width={260} height={200}/>
                    <p> {car.make} {car.model} {car.year} {car.rentalPrice}</p>
                    <p> {car.address} {car.rentalCompany}</p>
                    <p> {car.type} {car.mileage} {car.accessories[0]}</p>
                    <InfoBtn type='button' onClick={() => toogleModal(car)}>Learn More</InfoBtn>
                    <FavoriteBtn onClick={() => toogleToFavorite(car)}>{favorites.find(favCar => favCar.id === car.id) ?  <AiFillHeart size='24px' color='#3470FF'/> : <AiOutlineHeart size='24px' color='#ffffff'/>}</FavoriteBtn>
             </CarItem>   
             )) }
        </Cars>
        {isModalOpen && (
            <ModalCarInfo
              onToogle={toogleModal}
              carInfo={selectedCar}
            />
        )}
        {isBackToTop && (
          <BackToTopBtn type='button' onClick={scrollToTop}>
              Back to Top
          </BackToTopBtn>
        )}
        
        </>
        
   
    )
}