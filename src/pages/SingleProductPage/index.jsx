import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../requests/products'
import { Link, useParams } from 'react-router-dom'
import s from './index.module.css'
import zero from "../../media/notFoundPage_kaktus.svg";
import ButtonAddToCard from '../../components/ButtonAddToCard';



const SingleProductPage = () => {
  const [ singleProduct, setSingleProduct ] = useState({});

  const { product_id } = useParams();

  useEffect(() => getSingleProduct(product_id, setSingleProduct), []);

    const { title, price, description, image, category } = singleProduct;
  return (
    <div className={s.product}>
      {/* <img src={image} alt={title} /> */}
      <img className={s.four} src={zero} alt="kaktus" />
      <div>
        <h2>{ title } Secateurs </h2>

        <div className={s.price}>
          <div className={s.prices}>
             <p className={s.priceReal}>{ price } $199</p>
             <p className={s.priceDisc}>{ price } $240</p>
          </div>
          
          <div className={s.discount_percent}>
            <p>{price} -17%</p>
          </div>
        </div>

        <div className={s.counter}>
          <div>
            <p className={s.cunter}>- 1 + </p>
            <ButtonAddToCard></ButtonAddToCard> 
          </div>
        </div>

        <h3 className={s.descr}>{ description } Description</h3>

        <p className={s.fullDescr}>This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.
This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.
Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.</p>
        
        <Link to={`/categories/${category}`}>
          { category } Read more
        </Link>
      </div>
    </div>
  )
}

export default SingleProductPage