import React from "react";

const withAuth = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const isLoggedIn = true; 

    if (!isLoggedIn) {
      return <h2> Please Login to Continue</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;