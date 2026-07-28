function PostCard({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "15px",
        borderRadius: "8px"
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>

      <button>❤️ Like</button>
      <button>💬 Comment</button>
      <button>📤 Share</button>
    </div>
  );
}

export default PostCard;