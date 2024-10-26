import React from 'react'
import s from './index.module.css'
import { Dialog , Backdrop, Grow} from '@mui/material'
import ProductItem from '../ProductItem'
import closeImg from '../../media/close.svg'


const OneDayDiscountModal = ({isOpen, setIsOpen, product}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      BackdropComponent={Backdrop} // Компонент заднего фона модального окна(при клике на любую область закрывается)
      BackdropProps={{
        transitionDuration: 500,
      }}
      TransitionComponent={Grow} // Компонент для анимации открытия модального окна
      TransitionProps={{
        timeout: 500,
      }}
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        "& .MuiPaper-root": {
          borderRadius: "16px",
        },
      }}
    >
      <div className={s.card}>
        <div className={s.text_box}>
          <h2>50% discount on product of the day!</h2>
          <div onClick={() => setIsOpen(false)} className={s.close_box}>
            <img src={closeImg} alt="close" />
          </div>
        </div>
        <ProductItem
          {...product}
          productStyles={s.product_card}
          content="modal"
        />
      </div>
    </Dialog>
  )
}

export default OneDayDiscountModal