
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

// import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Main } from './SharedLayout.styled';


export const SharedLayout = () => {


    return (
        <>
        <Header/>
            <Suspense fallback={<LoadingSpinner />}>
                <Main>
                    <Outlet/>
                </Main>
            </Suspense>
        </>
            
            
    )
}