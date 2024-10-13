import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../requests/products'
import { Link, useParams } from 'react-router-dom'
import s from './index.module.css'


const SingleProductPage = () => {
  const [ singleProduct, setSingleProduct ] = useState({});

  const { product_id } = useParams();

  useEffect(() => getSingleProduct(product_id, setSingleProduct), []);

  const { title, price, description, image, category } = singleProduct;
  return (
    <div className={s.product}>
      <img src={image} alt={title} />
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <p>{ price }$</p>
        <Link to={`/categories/${category}`}>
          { category }
        </Link>
      </div>
    </div>
  )
}

export default SingleProductPage