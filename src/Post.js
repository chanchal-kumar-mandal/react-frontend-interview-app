import React, {useState, useEffect} from "react";

const Post = () => {
    const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    // Fetch posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data); // Set posts data
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures it runs once on mount

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Posts</h1>
      <ul className="list-disc list-inside">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <strong className="text-blue-700">{post.title}</strong>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Post;