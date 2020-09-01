import React from "react";
import styles from "./styles/index.module.scss";
import { useRouteMatch, Link } from "react-router-dom";

const CatalogueItem = ({ title, imageUrl, gridArea, linkUrl }) => {
  const { path } = useRouteMatch();

  return (
    <Link
      to={`${path}${linkUrl}`}
      style={{ backgroundImage: `url(${imageUrl}`, gridArea: `${gridArea}` }}
      className={styles.gridBox}
    >
      <h3 className={styles.title}> {title} </h3>
    </Link>
  );
};

export default CatalogueItem;
