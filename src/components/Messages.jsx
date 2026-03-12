import { useEffect, useState } from "react";
import LoadingSpinner from "./LodingSpinner";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fakeTexts = [
    "Hey bro, how are you?",
    "Let's connect!",
    "I saw your profile.",
    "Can we be friends?",
    "Nice to meet you!",
  ];

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((data) => {
          const msgs = data.results.map((user) => ({
            user,
            text: fakeTexts[Math.floor(Math.random() * fakeTexts.length)],
          }));

          setMessages(msgs);
          setLoading(false);
        });
    }, 500);
  }, []);

  const handleDelete = (id) => {
    setMessages(messages.filter((_, index) => index !== id));
  };

  return (
    <div className="message-container">
      {loading ? (
        <div className="loaderBox">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <h2>Message Requests</h2>

          {messages.length === 0 && <p>No new messages</p>}

          {messages.map((msg, index) => (
            <div key={index} className="message-card">
              <div className="message-info">
                <img src={msg.user.picture.medium} alt="profile" />

                <div>
                  <b>
                    {msg.user.name.first} {msg.user.name.last}
                  </b>
                  <p>{msg.text}</p>
                </div>
              </div>

              <div>
                <button className="replyBtn">Reply</button>

                <button
                  className="DeleteBtn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Messages;
