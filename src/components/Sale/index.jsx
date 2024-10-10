import React from 'react'
import s from './index.module.css'
import TitleBar from '../TitleBar'
import ProductList from '../ProductList'

const Sale = () => {
  return (
    <div>
        <div className={`${s.sale_container} container`}>
            <TitleBar title="Sale" textButton="All sales" linkTo="/sales"/>
            <div>
                <ProductList />
            </div>
        </div>
    </div>
  )
}

export default Sale