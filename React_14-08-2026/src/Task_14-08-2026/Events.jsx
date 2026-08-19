import { useEffect, useState } from "react";
import EventCard from "./EventCard";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);

        // Simulating API request
        await new Promise((resolve) =>
          setTimeout(resolve, 1000)
        );

        const eventData = [
          {
            id: 1,
            title: "Innovation Summit",
            category: "Technology",
            date: "18 Aug 2026",
            location: "Main Auditorium",
            icon: "💡",
          },
          {
            id: 2,
            title: "Photography Walk",
            category: "Creative",
            date: "20 Aug 2026",
            location: "City Park",
            icon: "📷",
          },
          {
            id: 3,
            title: "Startup Pitch Day",
            category: "Business",
            date: "23 Aug 2026",
            location: "Innovation Lab",
            icon: "🚀",
          },
          {
            id: 4,
            title: "Inter College Football",
            category: "Sports",
            date: "25 Aug 2026",
            location: "College Ground",
            icon: "⚽",
          },
        ];

        setEvents(eventData);
      } catch (err) {
        setError("Unable to load events.");
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="status">
        <div className="loader"></div>
        <p>Finding exciting events...</p>
      </div>
    );
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section className="page">

      <div className="page-heading">
        <span className="badge">EVENTS</span>

        <h1>What's happening on campus?</h1>

        <p>
          Explore events and find something interesting
          to participate in.
        </p>
      </div>

      <div className="event-grid">

        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </section>
  );
}

export default Events;