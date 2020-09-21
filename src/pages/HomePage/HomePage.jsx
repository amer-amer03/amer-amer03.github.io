import React from "react";
import Slider from "../../components/Slider/Slider";
import Catalogue from "../../components/Catalogue/Catalogue";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  const images = [
    "https://i.imgur.com/rDznWXr.jpg",
    "https://i.imgur.com/u8hgTTv.jpg",
    "https://i.imgur.com/gB5YmGx.jpg",
    "https://i.imgur.com/0mmUYV2.jpg",
  ];
  return (
    <div className={classes.homePage}>
      <div>
        <Slider images={images} autoPlay={10} />
      </div>
      <Catalogue />
    </div>
  );
};
export default HomePage;
