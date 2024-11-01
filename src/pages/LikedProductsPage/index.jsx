import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import s from "./index.module.css";
import ButtonNavigation from "../../components/ButtonNavigation";
import FilterPrice from "../../components/FilterBar/FilterPrice";
import FilterSort from "../../components/FilterBar/FilterSort";


export default function LikedProductsPage() {
  const likedProducts = useSelector(
    (store) => store.likedProducts.likedProducts
  ); // Получаем список избранных товаров из состояния

  return (
    <div className="container">
      <ButtonNavigation />
      <h2 className={s.text}>Liked products</h2>
      <div className='filters_bar'>
        <FilterPrice />
        <FilterSort />
      </div>

     
      {likedProducts.length === 0 ? (
        <div>
          <p className={s.liked_info}>
            Looks like you have no liked items currently.
          </p>
          <Link to="/products">
            <button className={s.btn_shopping}>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          <div className={s.product_item}>
            {likedProducts.map((product) => (
              <div key={product.id}>
                <ProductItem {...product} />
                {/* Используем компонент для отображения товара */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
