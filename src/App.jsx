import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage'
import MainPage from './pages/MainPage'
import Layout from './components/Layout'
import AllSalesPage from './pages/AllSalesPage'
import CategoriesPage from './pages/CategoriesPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleProductPage from './pages/SingleProductPage';

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
          <Route path='catigories/:category_name/:category_id' element={<SingleCategoryPage />}/>
          <Route path='cart' element={<ShoppingCartPage />}/>
          <Route path='liked' element={<LikedProductsPage />}/>
          <Route path='liked/:id' element={<SingleProductPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>

  )
}

export default App