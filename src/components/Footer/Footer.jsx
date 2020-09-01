import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

import AdidasLogo from "../../assets/images/adidas-img.png";
import ConverseLogo from "../../assets/images/converse-img.png";
import NikeLogo from "../../assets/images/nike-img.png";
import PumaLogo from "../../assets/images/puma-img.png";
import FacebookLogo from "../../assets/icons/facebook_icon.svg";
import InstagramLogo from "../../assets/icons/instagram_icon.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__Container}>
        <h2 className={styles.footer__Subtitle}> Light Store </h2>
        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>
            <Link to={"/about"} className={styles.footer__link}>
              About Us
            </Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link}>Stores</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link}>Careers</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footer__Container}>
        <h2 className={styles.footer__Subtitle}> Help </h2>
        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link}>Payment</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link}>Shipping</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link}>Return policy</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footer__Container}>
        <h2 className={styles.footer__Subtitle}>Our Brands</h2>
        <div className={styles.footer__imageContainer}>
          <img
            className={styles.footerImage}
            src={AdidasLogo}
            alt="Adidas Logo"
          />
          <img
            className={styles.footerImage}
            src={ConverseLogo}
            alt="Converse Logo"
          />
          <img className={styles.footerImage} src={NikeLogo} alt="Nike Logo" />
          <img className={styles.footerImage} src={PumaLogo} alt="Puma Logo" />
        </div>
      </div>

      <div className={styles.footer__Container}>
        <h2 className={styles.footerSubtitle}> We're Online </h2>
        <p>Follow us</p>
        <a href="https://www.facebook.com/iamlilbub/">
          <img
            className={styles.footerIcons}
            src={FacebookLogo}
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/iamlilbub/">
          <img
            className={styles.footerIcons}
            src={InstagramLogo}
            alt="Instagram Logo"
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
