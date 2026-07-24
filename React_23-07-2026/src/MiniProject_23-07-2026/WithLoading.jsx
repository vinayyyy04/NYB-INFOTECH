import React from "react";

const WithLoading = (WrappedComponent) => {
  return function (props) {

    if (props.loading) {
      return (
        <div style={styles.loader}>
          <h2>⏳ Loading Student Details...</h2>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

const styles = {
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1976d2",
  },
};

export default WithLoading;