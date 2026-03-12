import { useEffect, useState } from "react";
import LoadingSpinner from "./LodingSpinner";
const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((data) => {
          setRequests(data.results);
          setLoading(false);
        });
    }, 500);
  }, []);

  const handleAccept = (id) => {
    setRequests(requests.filter((_, index) => index !== id));
  };

  const handleReject = (id) => {
    setRequests(requests.filter((_, index) => index !== id));
  };

  return (
    <div className="friend-container">
      {loading ? (
        <div className="loaderBox">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <h2>Friend Requests</h2>
          {requests.length === 0 && <p>No new friend requests</p>}

          {requests.map((user, index) => (
            <div key={index} className="friend-card">
              <div className="friend-info">
                <img src={user.picture.medium} alt="profile" />
                <div>
                  <b>
                    {user.name.first} {user.name.last}
                  </b>
                  <p>{user.location.country}</p>
                </div>
              </div>

              <div>
                <button
                  className="accept-btn"
                  onClick={() => handleAccept(index)}
                >
                  Accept
                </button>

                <button
                  className="reject-btn"
                  onClick={() => handleReject(index)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FriendRequest;
