
import { Routes, Route } from "react-router-dom";
import { SharedLayout
 } from "./SharedLayout/SharedLayout";
import { lazy } from "react";


const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage= lazy(() => import('../pages/FavoritesPage/FavoritesPage'));





export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<WelcomePage/>}/>
        <Route path='cars' element={<CatalogPage/>}/>
        <Route path='favorite' element={<FavoritesPage/>}/>
      </Route>
    </Routes>
  );
};
