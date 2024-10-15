import React, { useEffect } from 'react'
import CategoriesList from "../../components/CategoriesList";
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories';


export default function CategoriesPage() {

    const categoriesState = useSelector(store => store.categories);

    const dispatch = useDispatch();

    useEffect(() => dispatch(getCategories), []);

  return (
    <div>
        <CategoriesList categories={categoriesState} />
    </div>
  )
}