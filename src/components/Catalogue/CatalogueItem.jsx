import React from "react";
import classes from "./styles/index.module.scss";
import { useRouteMatch, Link } from "react-router-dom";

const CatalogueItem = ({ title, imageUrl, gridArea, linkUrl }) => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Link
      to={`${path}${linkUrl}`}
      style={{ backgroundImage: `url(${imageUrl}`, gridArea: `${gridArea}` }}
      className={classes.gridBox}
    >
      <h3 className={classes.title}> {title} </h3>
    </Link>
  );
};

export default CatalogueItem;
