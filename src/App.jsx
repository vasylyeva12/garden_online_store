import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage'
import MainPage from './pages/MainPage'
import Layout from './components/Layout'
import AllSalesPage from './pages/AllSalesPage'
import CategoriesPage from './pages/CategoriesPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleProductPage from './pages/SingleProductPage';
import LikedProductsPage from './pages/LikedProductsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';



const App = () => {
  const { key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // при каждом изменении маршрута страница будет прокручена в самое начало.
  }, [key]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='products' element={<AllProductsPage />}/>
          <Route path='products/:product_id' element={<SingleProductPage />}/>        
          <Route path='sales' element={<AllSalesPage />}/>
          <Route path='categories' element={<CategoriesPage />}/>
          <Route path='/categories/:categoryId' element={<ProductsByCategoryPage />} />
            <Route path='cart' element={<ShoppingCartPage />}/>
          <Route path='liked' element={<LikedProductsPage />}/>   
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
