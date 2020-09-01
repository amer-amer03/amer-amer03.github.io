import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.module.scss";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/SignInPage/SignInPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import { selectIsPending } from "./store/shop/selectors";
import { fetchCollections } from "./store/shop/actions";
import { withSpinner } from "./hoc/withSpinner";
import { setCurrentUser } from "./store/user/actions";
import { selectCurrentUser } from "./store/user/selectors";

const App = () => {
  const CollectionPageWithSpinner = withSpinner(CollectionPage);

  const IsPending = useSelector(selectIsPending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);

  let unsubsribeFromAuth = useRef(null);

  useEffect(() => {
    unsubsribeFromAuth.current = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await createUserProfileDocument(user);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    return () => {
      unsubsribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          {currentUser ? <Redirect to="/" /> : <SignInPage />}
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route path={`/:collectionId`}>
          <CollectionPageWithSpinner isLoading={IsPending} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
