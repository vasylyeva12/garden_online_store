import React, { useEffect } from "react";
import s from "./index.module.css";
import { getAllProducts } from "../../requests/products";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";

const Sale = () => {
  const AllProductsState = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  return (
    <div className={s.card_container}>
    {AllProductsState.filter((el) => el.discont_price !== null)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map((el) => (
        <ProductItem key={el.id} {...el} />
      ))}
  </div>






























    // <section className={s.sale_container}>
    //   <div className="container">
    //     <TitleBar title="Sale" textButton="All sales" linkTo="/sales" />

    //     <div className={s.card_container}>
    //       {AllProductsState.filter((el) => el.discont_price !== null)
    //         .sort(() => Math.random() - 0.5)
    //         .slice(0, 4)
    //         .map((el) => (
    //           <ProductItem key={el.id} {...el} />
    //         ))}
    //     </div>

    //     <div className={s.hidden_btn}>
    //       <Link to="/sales">
    //         <button>All sales</button>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Sale;
