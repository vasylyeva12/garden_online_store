import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from '../../components/CategoriesList';
import { getCategories } from '../../requests/categories';


const CategoriesPage = () => {

  const  categoriesState = useSelector((state) => state.categories); // Выбираем наш массив с продуктами
   
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCategories), [])

  return (
    <CategoriesList categories = {categoriesState}/>
  )
}

export default CategoriesPage