import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

import AdidasLogo from "../../assets/images/adidas-img.png";
import ConverseLogo from "../../assets/images/converse-img.png";
import NikeLogo from "../../assets/images/nike-img.png";
import PumaLogo from "../../assets/images/puma-img.png";
import FacebookLogo from "../../assets/icons/facebook_icon.svg";
import InstagramLogo from "../../assets/icons/instagram_icon.svg";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__Container}>
        <h2 className={classes.footer__Subtitle}> Light Store </h2>
        <ul className={classes.footer__list}>
          <li className={classes.footer__item}>
            <Link to={"/about"} className={classes.footer__link}>
              About Us
            </Link>
          </li>
          <li className={classes.footer__item}>
            <Link to={"/storelocations"} className={classes.footer__link}>
              Stores
            </Link>
          </li>
          <li className={classes.footer__item}>
            <Link to={"/careers"} className={classes.footer__link}>
              Careers
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.footer__Container}>
        <h2 className={classes.footer__Subtitle}> Help </h2>
        <ul className={classes.footer__list}>
          <li className={classes.footer__item}>
            <Link to={"/payment"} className={classes.footer__link}>
              Payment
            </Link>
          </li>
          <li className={classes.footer__item}>
            <Link to={"/shipping"} className={classes.footer__link}>
              Shipping
            </Link>
          </li>
          <li className={classes.footer__item}>
            <Link to={"/returnpolicy"} className={classes.footer__link}>
              Return policy
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.footer__Container}>
        <h2 className={classes.footer__Subtitle}>Our Brands</h2>
        <div className={classes.footer__imageContainer}>
          <img
            className={classes.footerImage}
            src={AdidasLogo}
            alt="Adidas Logo"
          />
          <img className={classes.footerImage} src={PumaLogo} alt="Puma Logo" />
          <img className={classes.footerImage} src={NikeLogo} alt="Nike Logo" />
          <img
            className={classes.footerImage}
            src={ConverseLogo}
            alt="Converse Logo"
          />
        </div>
      </div>

      <div className={classes.footer__Container}>
        <h2 className={classes.footerSubtitle}> We're Online </h2>
        <p>Follow us</p>
        <a href="https://www.facebook.com/iamlilbub/">
          <img
            className={classes.footerIcons}
            src={FacebookLogo}
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/iamlilbub/">
          <img
            className={classes.footerIcons}
            src={InstagramLogo}
            alt="Instagram Logo"
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
