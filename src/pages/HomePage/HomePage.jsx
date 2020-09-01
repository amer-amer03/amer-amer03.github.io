import React from "react";
import Slider from "../../components/Slider/Slider";
import Catalogue from "../../components/Catalogue/Catalogue";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div>
        <Slider />
      </div>
      <Catalogue />
    </div>
  );
};
export default HomePage;
