import React, { useState } from "react";
import styles from "./styles/index.module.scss";
import CatalogueItem from "./CatalogueItem";
import PropTypes from "prop-types";

const Catalogue = () => {
  const [state] = useState({
    sections: [
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
        title: "Shoes",
        imageUrl: "https://i.imgur.com/63eebyH.jpg?1",
        id: 4,
        linkUrl: "shoes",
        gridArea: "d",
      },
    ],
  });

  return (
    <div className={styles.catalogue}>
      <div className={styles.gridContainer}>
        {state.sections.map((section) => {
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

export default Catalogue;

CatalogueItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  gridArea: PropTypes.string,
  linkUrl: PropTypes.string,
};
