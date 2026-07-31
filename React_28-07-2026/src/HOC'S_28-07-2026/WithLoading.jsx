import React from "react";

const WithLoading = (WrappedComponent) => {
  return function LoadingComponent(props) {
    const isLoading = false; // Change to true to test

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithLoading;