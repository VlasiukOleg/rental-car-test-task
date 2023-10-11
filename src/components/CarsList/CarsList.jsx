import { useDispatch, useSelector } from 'react-redux';
import { getCars} from 'redux/selectors';
import { fetchCars } from 'redux/operations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ModalCarInfo } from 'components/ModalCarInfo/ModalCarInfo';
import { LoadMoreButton } from 'components/LoadMoreBtn/LoadMoreBtn';

import { smoothScroll } from 'utils/smoothScroll';

import { useLocalStorage } from 'hooks/useLocalStorage';


import { useEffect, useState } from 'react';

import { Cars,  BackToTopBtn} from './CarsList.styled';


import { BsArrowUpCircle } from "react-icons/bs";


import { CarItem } from 'components/CarItem/CarItem';


const perPage = 8;

export const CarsList = () => {
    
    const cars = useSelector(getCars);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [page, setPage] = useState(1);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isBackToTop, setIsBackToTop] = useState(false);
    const [favorites, setFavorites] = useLocalStorage('favorite', []);


    let totalPage = 25 / perPage;

    const handleLoadMoreButton = () => {
      setPage(prevState => prevState + 1);

      setTimeout(() => {
        smoothScroll();
      }, 1000);
      
    };


    const toogleModal = (car) => {
        setIsModalOpen(prevState => !prevState);
        setSelectedCar(car);
     };

     const toogleToFavorite = (car) => {
      
      if (!favorites.find(favCar => favCar.id === car.id)) {
        setFavorites([...favorites, car]);
       
          Notify.success('Successfully added to favorites');
        
        
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
        dispatch(fetchCars(page));

        if (totalPage > 1) {
          setIsLoadMore(true);
        }

        if (page > totalPage) {
          setIsLoadMore(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, [dispatch, page, totalPage]);

    return (
        <>
        <Cars id="catalog">
             {cars?.map(car => (
             <CarItem key={car.id} car={car} favorites={favorites} toogleModal={toogleModal} toogleToFavorite={toogleToFavorite}/>
                
             ))}
        </Cars>
        {isLoadMore && (
        <LoadMoreButton handleLoadMoreButton={handleLoadMoreButton}/>
        )}
        
        {isModalOpen && (
            <ModalCarInfo
              onToogle={toogleModal}
              carInfo={selectedCar}
            />
        )}
        {isBackToTop && (
          <BackToTopBtn type='button' onClick={scrollToTop}>
              <BsArrowUpCircle size='40px' color='#3470FF'/>
          </BackToTopBtn>
        )}
        
        </>
        
   
    )
}