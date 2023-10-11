import { useDispatch, useSelector } from 'react-redux';
import { getCars} from 'redux/selectors';
import { fetchCars } from 'redux/operations';

import { ModalCarInfo } from 'components/ModalCarInfo/ModalCarInfo';
import { LoadMoreButton } from 'components/LoadMoreBtn/LoadMoreBtn';

import { smoothScroll } from 'utils/smoothScroll';

import { useLocalStorage } from 'hooks/useLocalStorage';


import { useEffect, useState } from 'react';

import { Cars, CarItem,InfoBtn, BackToTopBtn, FavoriteBtn} from './CarsList.styled';

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowUpCircle } from "react-icons/bs";

import noImage from '../../assets/images/noimage.jpeg'


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

    const handleError = (e) => {
          e.target.onerror = null; // Вимикаємо подальшу обробку помилки, щоб уникнути зациклення
          e.target.src = noImage; // Змінюємо src на дефолтне зображення у разі помилки
    }

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
             <CarItem key={car.id}>
                <img src={car.img} alt={car.make} onError={handleError} width={260} height={200}/>
                    <p> {car.make} {car.model} {car.year} {car.rentalPrice}</p>
                    <p> {car.address} {car.rentalCompany}</p>
                    <p> {car.type} {car.mileage} {car.accessories[0]}</p>
                    <InfoBtn type='button' onClick={() => toogleModal(car)}>Learn More</InfoBtn>
                    <FavoriteBtn onClick={() => toogleToFavorite(car)}>{favorites.find(favCar => favCar.id === car.id) ?  <AiFillHeart size='24px' color='#3470FF'/> : <AiOutlineHeart size='24px' color='#ffffff'/>}</FavoriteBtn>
             </CarItem>   
             )) }
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