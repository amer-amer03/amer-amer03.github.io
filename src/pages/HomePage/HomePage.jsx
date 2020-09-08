import React from "react";
import Slider from "../../components/Slider/Slider";
import Catalogue from "../../components/Catalogue/Catalogue";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div>
        <Slider />
      </div>
      <Catalogue />
    </div>
  );
};
export default HomePage;
