import React from "react";
import s from "./index.module.css";

const ModalSingleProduct = ({ product, closeModal }) => {
  return (
        <div className={`${s.modal} ${s.active}`} onClick={closeModal}>
      <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
        <img src={`http://localhost:3333/${product.image}`} alt={product.title} />
      </div>
    </div>
  );
};

export default ModalSingleProduct;



