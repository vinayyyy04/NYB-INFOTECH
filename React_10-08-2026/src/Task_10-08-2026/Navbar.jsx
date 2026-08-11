function Navbar({ isLoggedIn, onLogin }) {
  return (
    <nav className="navbar">
      <h2>AutoHub</h2>

      <div className="nav-right">
        <span>Home</span>
        <span>Cars</span>
        <span>About</span>

        {isLoggedIn ? (
          <button onClick={onLogin}>Logout</button>
        ) : (
          <button onClick={onLogin}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;