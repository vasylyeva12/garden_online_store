import React, { useEffect, useState } from "react";
import { getProductsByCategory, getSingleProduct } from "../../requests/products";
import { Link, useParams } from "react-router-dom";
import s from "./index.module.css";
import ButtonAddToCard from "../../components/ButtonAddToCard";
import Counter from "../../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { changeSingleProductStatusAction } from "../../store/reducers/singleProductReducer";
import { changeStatusAction } from "../../store/reducers/productsByCategoryReducer";
import { getCategories } from "../../requests/categories";
import ButtonNavigation from "../../components/ButtonNavigation";


const SingleProductPage = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null); /*for modal window */
  const dispatch = useDispatch();


  const { product_id } = useParams();

    // Состояние для отображения полного текста в Read more
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
    dispatch(changeSingleProductStatusAction());
  }, []);

  const singleProductState = useSelector((store) => store.product);
  const categoriesState = useSelector((store) => store.categories)

  const getCategoryTitle = id => {
    const category = categoriesState.find(el => el.id === id)
    return category ? category.title : 'Loading ...'
  }

  const {
    title,
    price,
    discont_price,
    description,
    image,

  } = singleProductState.data;

  // Вычисляем процент скидки
  const discountPercent =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  return (
    <div className="container">
      <section className={s.breadcrumbs}>
        <Link to='/'>
          <div className={s.crumb_box}> Main page </div>
        </Link>
        <div className={s.line}></div>
        <Link to='/categories'>
          <div className={s.crumb_box}> Categories </div>
        </Link>
        <div className={s.line}></div>
        <Link to={`/categories/:id`}>
          <div className={s.crumb_box}>{categoriesState.length > 0 ? getCategoryTitle(id) : 'Loading...'}</div>
        </Link>
        <div className={s.line}></div>
        <Link to={`/product/${product_id}`}>
          <div className={s.crumb_box}> {title} </div>
        </Link>
      </section>
      {
        singleProductState.status === 'loading'
          ? <p>Product info is loading...</p>
          : <div className={s.product}>

            <img src={`http://localhost:3333/${image}`} alt={title} />

            <div>
              <h2>{title}</h2>

              <div className={s.price}>
                <div className={s.prices}>
                  <p className={s.priceReal}>${Math.round(price)}</p>

                  {/* Показывать discont_price только если есть скидка */}
                  {discont_price && price > discont_price && (
                    <p className={s.priceDisc}>${Math.round(discont_price)}</p>
                  )}
                </div>

                {/* Показывать процент скидки, если он существует */}
                {discountPercent && (
                  <div className={s.discount_percent}>
                    <p>-{discountPercent}%</p>
                  </div>
                )}
              </div>

              <div className={s.counter_item}>
                <Counter />
                <ButtonAddToCard id={product_id} title={title} price={price} discont_price={discont_price} image={image} />

              </div>

              <h3 className={s.descr_text}>Description</h3>

              <p className={`${s.descr} ${isExpanded ? s.expanded : ""}`}>
            {description}
          </p>

              {/* <p className={s.fullDescr}> </p> */}
              <Link onClick={() => setIsExpanded(!isExpanded)} className={s.readmore_text}>
            {isExpanded ? "Show less" : "Read more"}
          </Link>
            </div>
          </div>
      }


    </div>
  );
};

export default SingleProductPage;
