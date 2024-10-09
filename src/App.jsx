import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage'
import MainPage from './pages/MainPage'
import Layout from './components/Layout'
import AllSalesPage from './pages/AllSalesPage'
import CategoriesPage from './pages/CategoriesPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleCategoryPage from './pages/SingleCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='products' element={<AllProductsPage />}/>
          <Route path='products/:product_id' element={<SingleProductPage />}/>
          <Route path='sales/:id' element={<SingleProductPage />}/>
          <Route path='sales' element={<AllSalesPage />}/>
          <Route path='catigories' element={<CategoriesPage />}/>
          <Route path='catigories/:category_name' element={<SingleCategoryPage />}/>
          <Route path='catigories/:category_name/:id' element={<SingleCategoryPage />}/>
          <Route path='cart' element={<ShoppingCartPage />}/>
          <Route path='favorites' element={<FavoritesPage />}/>
          <Route path='favorites/:id' element={<SingleProductPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>

  )
}

export default App