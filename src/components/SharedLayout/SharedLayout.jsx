
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';


export const SharedLayout = () => {


    return (
        <Container>
            <Header/>
            <Suspense>
                <main>
                    <Outlet/>
                </main>
            </Suspense>
        </Container>
    )
}