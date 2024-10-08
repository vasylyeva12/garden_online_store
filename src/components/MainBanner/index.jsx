import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <section className={s.main}>
      <div className="container">
        <div className={s.block}>
          <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
          <div className={s.btn}>
            <Link to="/sales" className={s.btn}>
              Check out
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;