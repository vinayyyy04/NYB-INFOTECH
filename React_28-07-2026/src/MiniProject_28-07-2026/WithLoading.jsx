function WithLoading(Component) {
  return function EnhancedComponent(props) {
    if (props.loading) {
      return <h2 className="loading">Loading Patient Records...</h2>;
    }

    return <Component {...props} />;
  };
}

export default WithLoading;