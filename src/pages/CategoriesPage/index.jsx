import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import { useSelector } from 'react-redux';

const CategoriesPage = () => {

  const  categoriesState = useSelector((state) => state.categories); // Выбираем наш массив с продуктами

  return (
    <CategoriesContainer categories = {categoriesState}/>
  )
}

export default CategoriesPage