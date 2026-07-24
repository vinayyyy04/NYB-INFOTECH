import React from "react";

const withLoading = (WrappedComponent) => {
  return function (props) {
    if (props.loading) {
      return <h2>Loading Movies...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;