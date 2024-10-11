import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

const ButtonNavigation = ({ crumbs }) => {
  return (
    <div className="button-navigation">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={index} className="button-navigation_item">
            <Link to={crumb.path} className={`button-navigation_link ${isLast ? 'last' : ''}`}>
              <button className="button-navigation_btn">
                {crumb.label}
              </button>
            </Link>
            {!isLast && <div className="button-navigation_separator"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonNavigation;