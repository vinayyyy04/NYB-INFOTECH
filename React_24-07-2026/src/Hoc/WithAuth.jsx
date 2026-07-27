const WithAuth = (Component) => {

  return function AuthComponent(props) {

    if (!props.isLoggedIn) {
      return <h2>Access Denied. Please Login.</h2>;
    }

    return <Component {...props} />;
  };

};

export default WithAuth;