import React from "react";

const WithAuthorization = (WrappedComponent) => {
  return function (props) {
    const userRole = "people";

    if (userRole !== "Doctor") {
      return <h2>Access Denied! Doctors Only.</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuthorization;