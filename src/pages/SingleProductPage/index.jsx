import React, { useEffect, useState } from "react";

import {
  getProductsByCategory,
  getSingleProduct,
} from "../../requests/products";

import { Link, useParams } from "react-router-dom";
import s from "./index.module.css";
import ButtonAddToCard from "../../components/ButtonAddToCard";
import Counter from "../../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { changeSingleProductStatusAction } from "../../store/reducers/singleProductReducer";
import { PiHeartFill } from "react-icons/pi";
import { addProductToCartAction } from "../../store/reducers/cartReducer";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";


const SingleProductPage = () => {
  const dispatch = useDispatch();

  const { product_id } = useParams();
  //  const [isModalOpen, setIsModalOpen] = useState(false) /*for modal window */

  // Состояние для отображения полного текста в Read more
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
    dispatch(changeSingleProductStatusAction());
  }, [dispatch, product_id]);

  const singleProductState = useSelector((store) => store.product);
 
  const likedProductsState = useSelector((store) =>
    store.likedProducts.likedProducts.some(
      (item) => item.id === parseInt(product_id)
    )
  );
  const productsByCategoryState = useSelector((store) => store.productsByCategory.data
  );
   // const [isLiked, setIsLiked] = useState(false)


   

  const getCategoryTitle = (categoryId) => {
    const category = productsByCategoryState && productsByCategoryState.find((el) => el.id === categoryId);
    return category ? category.title : "Loading ...";
  };  

  const handleLikedClick = () => {
    if (singleProductState) {
      if (likedProductsState) {
        dispatch(toggleLikedProductAction(singleProductState.id));
      } else {
        dispatch(
          toggleLikedProductAction({
            id: singleProductState.id,
            discont_price: singleProductState.discont_price,
            price: singleProductState.price,
            title: singleProductState.title,
            image: singleProductState.image,
          })
        );
      }
    }
  };

  const { id, title, price, discont_price, description, image } =
    singleProductState.data || {};

  // Вычисляем процент скидки
  const discountPercent =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  return (
    <div className="container">
      <section className={s.breadcrumbs}>
        <Link to="/">
          <div className={s.crumb_box}> Main page </div>
        </Link>
        <div className={s.line}></div>
        <Link to="/categories">
          <div className={s.crumb_box}> Categories </div>
        </Link>
        <div className={s.line}></div>
        <Link to={`/categories/${singleProductState?.data?.categoryId}`}>
          <div className={s.crumb_box}>
            {/* {productsByCategoryState.length > 0 */}
              {getCategoryTitle(singleProductState?.data?.categoryId)}
              {/* : "Loading..."} */}
          </div>
        </Link>
        <div className={s.line}></div>
        <Link to={`/product/${id}`}>
          <div className={`${s.crumb_box} ${s.text_black}`}> {title} </div>
        </Link>
      </section>

      {singleProductState.status === "loading" ? (
        <p>Product info is loading...</p>
      ) : (
        <div className={s.product}>
          <img src={`http://localhost:3333/${image}`} alt={title} />

          <div>
            <div>
              <h2>{title}</h2>
              <PiHeartFill
                className={`${s.heartIcon} ${likedProductsState ? s.liked : ""}`}
                onClick={handleLikedClick}
              />
            </div>

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
              <ButtonAddToCard
                id={product_id}
                title={title}
                price={price}
                discont_price={discont_price}
                image={image}
              />
            </div>

            <h3 className={s.descr_text}>Description</h3>

            <p className={`${s.descr} ${isExpanded ? s.expanded : ""}`}>
              {description}
            </p>

            {/* <p className={s.fullDescr}> </p> */}
            <Link
              onClick={() => setIsExpanded(!isExpanded)}
              className={s.readmore_text}
            >
              {isExpanded ? "Show less" : "Read more"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
