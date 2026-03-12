import { useEffect, useState } from "react";
import LoadingSpinner from "./LodingSpinner";

const SavedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const captions = [
    "Beautiful moment 🌄",
    "Travel memories ✈️",
    "Best day ever 😍",
    "Nature love 🌿",
    "Life is amazing ✨",
    "Best Moment 😍",
  ];

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=6")
        .then((res) => res.json())
        .then((data) => {
          const saved = data.results.map((user, index) => ({
            user,
            caption: captions[Math.floor(Math.random() * captions.length)],
            image: `https://picsum.photos/400/300?random=${index}`,
          }));

          setPosts(saved);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const handleRemove = (id) => {
    setPosts(posts.filter((_, index) => index !== id));
  };

  return (
    <div className="saved-container">
      {loading ? (
        <div className="loaderBox">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {posts.length === 0 && <p>No saved posts</p>}
          {posts.map((post, index) => (
            <div key={index} className="saved-card">
              <div className="saved-user">
                <img src={post.user.picture.medium} alt="profile" />
                <b>
                  {post.user.name.first} {post.user.name.last}
                </b>
              </div>

              <img src={post.image} className="saved-img" alt="post" />

              <p>{post.caption}</p>

              <button className="removeBtn" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SavedPosts;
