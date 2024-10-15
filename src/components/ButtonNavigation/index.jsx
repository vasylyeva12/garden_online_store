import React from 'react'

const ButtonNavigation = () => {
  return (
    <div>ButtonNavigation</div>
  )
}

export default ButtonNavigation

// import React from 'react';
// import { Link } from 'react-router-dom';
// import s from './index.module.css';

// const ButtonNavigation = ({ crumbs }) => {
//   return (
//     <div className={s.button}>
//       {crumbs.map((crumb, index) => {

//         const isLast = index === crumbs.length - 1;

//         return (
//           <div key={index} className={s.navigation_item}>
//             <Link to={crumb.path} className={`${s.navigation_link} ${isLast ? s.last : ''}`}>
//               <button className={s.navigation_btn}>
//                 {crumb.label}
//               </button>
//             </Link>
//             {!isLast && <div className={s.button-navigation_separator}></div>}
//           </div>
//         );
//       })} 
//     </div>
//   );
// };

// export default ButtonNavigation;
