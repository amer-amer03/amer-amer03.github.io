import React from "react";
import classes from "./styles/index.module.scss";
import CatalogueItem from "./CatalogueItem";
import PropTypes from "prop-types";

const Catalogue = () => {
  const sections = [
    {
      title: "Women",
      imageUrl: "https://i.imgur.com/qpO2Wva.jpg",
      id: 1,
      linkUrl: "women",
      gridArea: "a",
    },
    {
      title: "Kids",
      imageUrl: "https://i.imgur.com/JSa7ETp.jpg",
      id: 2,
      linkUrl: "kids",
      gridArea: "b",
    },
    {
      title: "Men",
      imageUrl: "https://i.imgur.com/bUEuw5b.jpg",
      id: 3,
      linkUrl: "men",
      gridArea: "c",
    },
    {
      title: "Women's Shoes",
      imageUrl: "https://i.imgur.com/FmjqGz3.jpg?1",
      id: 4,
      linkUrl: "womenshoes",
      gridArea: "d",
    },
    {
      title: "Men's Shoes",
      imageUrl: "https://i.imgur.com/IcnPHNI.jpg?1",
      id: 5,
      linkUrl: "menshoes",
      gridArea: "e",
    },
  ];

  return (
    <div className={classes.catalogue}>
      <div className={classes.gridContainer}>
        {sections.map((section) => {
          return (
            <CatalogueItem
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              gridArea={section.gridArea}
              linkUrl={section.linkUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

CatalogueItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  gridArea: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default Catalogue;
