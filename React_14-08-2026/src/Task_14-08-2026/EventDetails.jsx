import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

  return (
    <section className="details-page">

      <div className="details-card">

        <span className="badge">
          EVENT #{id}
        </span>

        <h1>Innovation Summit</h1>

        <p>
          Join students, developers and entrepreneurs
          for a day of ideas, technology and networking.
        </p>

        <div className="details-info">
          <div>
            📅
            <strong>18 August 2026</strong>
          </div>

          <div>
            📍
            <strong>Main Auditorium</strong>
          </div>

          <div>
            👥
            <strong>250 Students</strong>
          </div>
        </div>

        <Link
          to="/register"
          className="primary-btn"
        >
          Register Now
        </Link>

      </div>

    </section>
  );
}

export default EventDetails;