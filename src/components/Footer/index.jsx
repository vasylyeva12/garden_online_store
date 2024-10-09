// import React from 'react'
// import s from './index.module.css'
// import { RiInstagramFill } from "react-icons/ri";
// import { RiWhatsappFill } from "react-icons/ri";

// function Footer() {
//   return (
//     <footer className={s.footer_container}>
//       <div className='container'>
//         <p className={s.title}>Contact</p>
//       </div>
//       <div className={s.card_items}>
//         <div className={s.footer_item}>
//           <p>Phone</p>
//           <p>+49 999 999 99 99</p>
//         </div>
//         <div className={s.footer_item}>
//           <p>Socials</p>
//           <div className={s.images}>
//             <a href="https://www.instagram.com/">
//               <RiInstagramFill className={s.icon} />
//             </a>
//             <a href="https://web.whatsapp.com/">
//               <RiWhatsappFill className={s.icon} />
//             </a>
//           </div>
//         </div>
//         <div className={s.footer_item}>
//           <p>Address</p>
//           <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
//         </div>
//         <div className={s.footer_item}>
//           <p>Working Hours</p>
//           <p>24 hours a day</p>
//         </div>
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095566177657!2d13.372520476191934!3d52.50792683712399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1723228390180!5m2!1sde!2sde"></iframe>
//       </div>
//     </footer>
//   )
// }

// export default Footer;
import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="container">
      <div className={s.footer}>
        <h2 className={s.contact_title}>Contact</h2>
        <div className={s.contact_container}>
          <div className={s.contact_item}>
            <h3>Phone</h3>
            <Link to="tel:+499999999999" target="_blank">
              +49 999 999 99 99
            </Link>
          </div>
          <div className={s.contact_item}>
            <h3>Socials</h3>
            <div className={s.social_icons}>
              <Link to="https://www.instagram.com" target="_blank">
                <RiInstagramFill className={s.icon} />
              </Link>
              <Link to="https://wa.me/+499999999999" target="_blank">
                <RiWhatsappFill className={s.icon} />
              </Link>
            </div>
          </div>
          <div className={s.contact_item}>
            <h3>Address</h3>
            <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          </div>
          <div className={s.contact_item}>
            <h3>Working Hours</h3>
            <p>24 hours a day</p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095566177657!2d13.372520476191934!3d52.50792683712399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1723228390180!5m2!1sde!2sde"></iframe>
      </div>
    </div>
  );
};

export default Footer;
