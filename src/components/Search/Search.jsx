import React, { useState } from "react";
import classes from "./Search.module.scss";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectAllCollections } from "../../store/shop/selectors";
import SearchIcon from "../../assets/icons/search.svg";

const Search = () => {
  const history = useHistory();
  const allCollections = useSelector(selectAllCollections);

  const [searchTerms, setSearchTerms] = useState("");
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleClearInput = () => {
    setSearchTerms("");
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/results",
      search: searchTerms,
    });
    handleClearInput();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.searchBarContainer}>
        <input
          onChange={handleChange}
          placeholder="Search"
          className={classes.searchBar}
          type="text"
          value={searchTerms}
        />
        <button className={classes.searchBarButton}>
          <img
            src={SearchIcon}
            className={classes.searchBarIcon}
            alt="Search Icon"
          />
        </button>
      </form>

      {searchTerms !== "" && (
        <div
          onClick={handleClearInput}
          className={classes.modalBackground}
        ></div>
      )}
      {searchTerms !== "" && (
        <div className={classes.searchResultsContainer}>
          {searchResultsArr.slice(0, 5).map((item) => {
            return (
              <Link
                to={`/${item.collectionId}/${item.id}`}
                key={item.id}
                className={classes.searchResults}
                onClick={handleClearInput}
              >
                <img
                  className={classes.searchResults__image}
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className={classes.searchResults__footer}>
                  <span className={classes.searchResults__title}>
                    {item.title}
                  </span>
                  <span className={classes.searchResults__subtitle}>
                    {item.subtitle}
                  </span>

                  <span className={classes.searchResults__price}>
                    ${item.price}
                  </span>
                </div>
              </Link>
            );
          })}
          <button className={classes.closeSymbol} onClick={handleClearInput}>
            &#10005;
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
