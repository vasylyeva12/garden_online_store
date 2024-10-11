import React from "react";
import s from "./index.module.css";
import four from "../../media/notFoundPage_4.svg";
import zero from "../../media/notFoundPage_kaktus.svg";
import { useNavigate } from "react-router-dom";
import React from 'react';
import s from "./index.module.css";
import img1 from "../../media/notFoundPage_4.svg";
import img2 from "../../media/notFoundPage_kaktus.svg";

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className={s.notFoundPage}>
        <div className={s.wrapper_error}>
          <img className={s.four} src={four} alt="four" />
          <img className={s.four} src={zero} alt="kaktus" />
          <img className={s.four} src={four} alt="four" />
        </div>

        <div className={s.wrapper_content}>
          <h4>Page Not Found</h4>
          <p>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <button 
          className={s.btn}
          onClick={()=> {
            navigate('/')
          }}> Go Home</button>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
