import React from "react";
import { Link } from "react-router-dom";

const EventCard = React.memo(function EventCard({
  event,
}) {
  return (
    <article className="event-card">

      <div className="event-icon">
        {event.icon}
      </div>

      <span className="category">
        {event.category}
      </span>

      <h2>{event.title}</h2>

      <p>📅 {event.date}</p>

      <p>📍 {event.location}</p>

      <Link
        to={`/events/${event.id}`}
        className="card-btn"
      >
        View Details
      </Link>

    </article>
  );
});

export default EventCard;