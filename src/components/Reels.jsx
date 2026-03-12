import { useEffect, useState } from "react";
import LoadingSpinner from "./LodingSpinner";

const Reels = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => {
          setReels(data.results);
          setLoading(false);
        });
    }, 500);
  }, []);

  return (
    <div className="reels-container">
      {loading ? (
        <div className="loaderBox">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <h2>Reels</h2>

          {reels.map((user, index) => (
            <div key={index} className="reel-card">
              <img
                src={`https://picsum.photos/300/500?random=${index}`}
                alt="reel"
                className="reel-video"
              />

              <div className="reel-info">
                <img src={user.picture.medium} alt="profile" />

                <p>
                  <b>{user.name.first}</b> posted a reel
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Reels;
