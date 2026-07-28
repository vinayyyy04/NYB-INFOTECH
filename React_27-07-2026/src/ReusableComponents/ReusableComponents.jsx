import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function ReusableComponents() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Social Media Feed</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default ReusableComponents;