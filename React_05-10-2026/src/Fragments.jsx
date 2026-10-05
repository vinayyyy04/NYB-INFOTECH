function Header() {
  return (
    <>
      <h1>NYB Infotech</h1>
      <p>Welcome to our website</p>
    </>
  );
}

function Services() {
  return (
    <>
      <h2>Our Services</h2>

      <div>
        <h3>Web Development</h3>
        <p>Modern and responsive websites.</p>
      </div>

      <div>
        <h3>App Development</h3>
        <p>Professional mobile applications.</p>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <hr />
      <p>© 2026 NYB Infotech</p>
    </>
  );
}

function Fragments() {
  return (
    <>
      <Header />
      <Services />
      <Footer />
    </>
  );
}

export default Fragments;