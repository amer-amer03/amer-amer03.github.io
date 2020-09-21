import React from "react";
import classes from "./SearchResultsPage.module.scss";
import CollectionItem from "../../components/Collection/CollectionItem";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCollections } from "../../store/shop/selectors";
import PropTypes from "prop-types";

const SearchResultsPage = () => {
  const searchTerms = useLocation().search.replace(/[?|%20]/g, " ");

  const allCollections = useSelector(selectAllCollections);
  const allCollectionsItems = Object.assign(
    {},
    ...Object.keys(allCollections).map(function (key) {
      return allCollections[key].items;
    })
  );
  const allItemsArr = Object.keys(allCollectionsItems).map(
    (item) => allCollectionsItems[item]
  );

  const searchTermCleanedArr = searchTerms
    .toLowerCase()
    .split(" ")
    .filter((item) => {
      return item !== "";
    });
  const searchResultsArr = allItemsArr.filter((item) => {
    for (let i in searchTermCleanedArr) {
      if (
        !item.title.toLowerCase().includes(searchTermCleanedArr[i]) &&
        !item.subtitle.toLowerCase().includes(searchTermCleanedArr[i]) &&
        !item.color.toLowerCase().includes(searchTermCleanedArr[i])
      )
        return false;
    }
    return true;
  });

  return (
    <div className={classes.searchResultsPage}>
      <div className={classes.searchResultsPage__titleContainer}>
        <h2 className={classes.searchResultsPage__title}>
          Results for: {searchTerms}
        </h2>
      </div>
      <div className={classes.searchResultsPage__items}>
        {searchResultsArr.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              item={item}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              imageUrl={item.imageUrl}
              collectionId={item.collectionId}
            />
          );
        })}
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.object,
  id: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  images: PropTypes.object,
  collectionId: PropTypes.string,
};

export default SearchResultsPage;
