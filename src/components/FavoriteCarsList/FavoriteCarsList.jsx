import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ModalCarInfo } from 'components/ModalCarInfo/ModalCarInfo';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { useEffect, useState } from 'react';

import { Cars, BackToTopBtn} from './FavoriteCarsList.styled';

import { CarItem } from 'components/CarItem/CarItem';

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
            <CarItem key={car.id} car={car} favorites={favorites} toogleModal={toogleModal} toogleToFavorite={toogleToFavorite}/> 
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