import React from "react";
import s from "./index.module.css";

const ModalSingleProduct = ({ product, closeModal }) => {
  const apiUrl = import.meta.env.APP_API_URL;
  return (
        <div className={`${s.modal} ${s.active}`} onClick={closeModal}>
      <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
        <img src={`${apiUrl}/${product.image}`} alt={product.title} />
      </div>
    </div>
  );
};

export default ModalSingleProduct;



