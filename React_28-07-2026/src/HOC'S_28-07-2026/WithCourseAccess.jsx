import React from "react";

const WithCourseAccess = (WrappedComponent) => {
  return function CourseAccessComponent() {
    const hasPurchased = true; // Change to false to test

    if (!hasPurchased) {
      return <h2>🔒 Please purchase this course to continue.</h2>;
    }

    return <WrappedComponent />;
  };
};

export default WithCourseAccess;