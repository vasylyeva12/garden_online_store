import React, { useContext, useEffect, useState } from "react";
import {
  getProductsByCategory,
  getSingleProduct,
} from "../../requests/products";
import { Link, useParams } from "react-router-dom";
import s from "./index.module.css";
import ButtonAddToCard from "../../components/ButtonAddToCard";
import Counter from "../../components/Counter";
import ModalSingleProduct from "../../components/ModalSingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { changeSingleProductStatusAction } from "../../store/reducers/singleProductReducer";
import { PiHeartFill } from "react-icons/pi";
import { addProductToCartAction } from "../../store/reducers/cartReducer";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";

const SingleProductPage = () => {
  const apiUrl = import.meta.env.APP_API_URL;
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const [isExpanded, setIsExpanded] = useState(false); // Состояние для отображения полного текста в Read more

  const singleProductState = useSelector((store) => store.product);
  const categoriesState = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(changeSingleProductStatusAction());
    dispatch(getSingleProduct(product_id));
  }, [dispatch]);

  const likedProductsState = useSelector((store) =>
    store.likedProducts.likedProducts.some(
      (item) => item.id === parseInt(product_id)
    )
  );

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory.data
  );

  const getCategoryTitle = (categoryId) => {
    const category =
      categoriesState && categoriesState.find((el) => el.id === categoryId);
    console.log(category);

    return category ? category.title : "Loading ...";
  };

  const handleClickLikeIcon = () => {
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { id, title, price, discont_price, description, image } =
    singleProductState.data || {};

  const discountPercent = discont_price
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
            {getCategoryTitle(singleProductState?.data?.categoryId)}
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
          <img
            src={`${apiUrl}/${image}`}
            alt={title}
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />

          <div>
            <div className={s.title_box}>
              <h2>{title}</h2>
              <PiHeartFill
                className={likedProductsState ? s.liked : s.like}
                onClick={handleClickLikeIcon}
              />
            </div>

            <div className={s.price_container}>

              <div className={s.price_box}>
                <p className={s.priceReal}>${Math.round(price)}</p>
                {discont_price && price > discont_price && (
                  <p className={s.priceDisc}>${Math.round(discont_price)}</p>
                )}
              </div>

              <div >
                {discountPercent && (                  
                    <p className={s.discount_percent}>-{discountPercent}%</p>                  
                )}
              </div>
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

            <Link
              onClick={() => setIsExpanded(!isExpanded)}
              className={s.readmore_text}
            >
              {isExpanded ? "Show less" : "Read more"}
            </Link>
          </div>

          {isModalOpen && (
            <ModalSingleProduct
              product={singleProductState.data}
              closeModal={closeModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
