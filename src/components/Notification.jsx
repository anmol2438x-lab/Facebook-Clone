import { useEffect, useState } from "react";
import LoadingSpinner from "./LodingSpinner";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const notifyTexts = [
    "liked your post ❤️",
    "commented on your photo",
    "started following you",
    "sent you a friend request",
    "mentioned you in a comment",
  ];

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((data) => {
          const notes = data.results.map((user) => ({
            user,
            text: notifyTexts[Math.floor(Math.random() * notifyTexts.length)],
          }));

          setNotifications(notes);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const handleRemove = (id) => {
    setNotifications(notifications.filter((_, index) => index !== id));
  };

  return (
    <div className="notification-container">
      {loading ? (
        <div className="loaderBox">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <h2>Notifications</h2>

          {notifications.length === 0 && <p>No new notifications</p>}

          {notifications.map((note, index) => (
            <div key={index} className="notification-card">
              <div className="notification-info">
                <img src={note.user.picture.medium} alt="profile" />

                <p>
                  <b>
                    {note.user.name.first} {note.user.name.last}
                  </b>{" "}
                  {note.text}
                </p>
              </div>

              <button className="DeleteBtn" onClick={() => handleRemove(index)}>
                Clear
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Notifications;
