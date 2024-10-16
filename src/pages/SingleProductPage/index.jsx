import React, { useEffect } from "react";
import { getSingleProduct } from "../../requests/products";
import { Link, useParams } from "react-router-dom";
import s from "./index.module.css";
import zero from "../../media/notFoundPage_kaktus.svg";
import ButtonAddToCard from "../../components/ButtonAddToCard";
import NavMenuPages from "../../components/NavMenuPages";
import Counter from "../../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { changeSingleProductStatusAction } from "../../store/reducers/singleProductReducer";

const SingleProductPage = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null); /*for modal window */

  const dispatch = useDispatch();

  const { product_id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
    dispatch(changeSingleProductStatusAction());
  }, []);

  const singleProductState = useSelector((store) => store.product);

  const {
    title,
    price,
    discont_price,
    description,
    image,
    category,
    categoryId,
  } = singleProductState.data;

  return (
    <>
      <div className={s.navMenuPages}>
        <NavMenuPages />
      </div>

      {
        singleProductState.status === 'loading'
        ? <p>Product info is loading...</p>
        : <div className={s.product}>
        <img  src={`http://localhost:3333/${image}`} alt={title} />
        <div>
          <h2>{title}</h2>

          <div className={s.price}>
            <div className={s.prices}>
              <p className={s.priceReal}>{price} </p>
              <p className={s.priceDisc}>{discont_price}</p>
            </div>

            <div className={s.discount_percent}>
              <p>{price}</p>
            </div>
          </div>

          <div className={s.counter_item}>
            <Counter />
            <ButtonAddToCard />
          </div>

          <h3 className={s.descr}>{description} </h3>

          <p className={s.fullDescr}>
            
          </p>

          {/* <Link to={`/categories/${category}`}>
          { category } Read more
        </Link> */}
          <Link to={`/products/${product_id}`}>
            {category ? category : "No product"} Read more
          </Link>
        </div>
      </div>
      }

      
    </>
  );
};

export default SingleProductPage;
