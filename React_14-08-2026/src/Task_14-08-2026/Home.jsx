import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="badge">
          🎓 Student Community
        </span>

        <h1>
          Discover Your Next
          <span> Campus Experience</span>
        </h1>

        <p>
          Find workshops, hackathons, cultural events,
          sports and exciting opportunities happening
          around your campus.
        </p>

        <Link
          to="/events"
          className="primary-btn"
        >
          Explore Events →
        </Link>

      </div>

      <div className="hero-card">
        <div className="hero-icon">🎤</div>
        <h3>Upcoming Event</h3>
        <p>Innovation & Ideas Summit</p>
        <strong>Tomorrow · 10:00 AM</strong>
      </div>

    </section>
  );
}

export default Home;