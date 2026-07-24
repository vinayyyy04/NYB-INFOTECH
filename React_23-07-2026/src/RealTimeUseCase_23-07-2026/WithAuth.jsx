import Login from "./Login";

const withAuth = (WrappedComponent) => {
  return function (props) {
    if (!props.isLoggedIn) {
      return <Login onLogin={props.onLogin} />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;