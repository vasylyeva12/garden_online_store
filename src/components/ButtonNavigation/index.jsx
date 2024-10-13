import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css'; // Подключаем стили из вашего файла CSS

const ButtonNavigation = ({ crumbs }) => {
  return (
    <div className={s.buttonNavigation}>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={index} className={s.buttonNavigationItem}>
            <Link to={crumb.path} className={`${s.buttonNavigationLink} ${isLast ? s.last : ''}`}>
              <button className={s.buttonNavigationBtn}>
                {crumb.label}
              </button>
            </Link>
            {!isLast && <div className={s.buttonNavigationSeparator}></div>}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonNavigation;
