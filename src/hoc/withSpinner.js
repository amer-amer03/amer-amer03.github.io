import React from "react";
import Spinner from "../components/Spinner/Spinner";

export const withSpinner = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...props} />;
  };
};
