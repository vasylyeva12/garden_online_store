import React from 'react';
import s from "./index.module.css";
import img1 from "../../media/notFoundPage_4.svg";
import img2 from "../../media/notFoundPage_kaktus.svg";

const NotFoundPage = () => {
  return (
    <div>
        <section className={s.notFoundPage}>

            <div className={s.notFoundPage__item}>
                <div className={s.notFoundPage__item404}>
                   <img className={s.four} src={img1} alt="four" />
                   <img className={s.four} src={img2} alt="kaktus" />
                   <img className={s.four} src={img1} alt="four" />
                </div>
            </div>
            
            <div className={s.notFoundPage__itemContent}>
                <h1 className={s.itemContent_title}>Page Not Found</h1>
                <p className={s.itemContent_description}>We’re sorry, the page you requested could not be found.
                    Please go back to the homepage.</p>
                <button className={s.itemContent_button}>Go Home</button>
            </div>
            
        </section>    
    </div>
  )
}

export default NotFoundPage