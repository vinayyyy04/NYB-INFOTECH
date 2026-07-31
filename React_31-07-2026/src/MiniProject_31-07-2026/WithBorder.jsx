function WithBorder(Component) {
  return function () {
    return (
      <div className="border-box">
        <Component />
      </div>
    );
  };
}

export default WithBorder;