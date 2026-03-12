import { useEffect, useState } from "react";
import LoadingSpinner from "./LodingSpinner";

const Help = () => {
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMsg("Your request sent successfully ✅");
    setTimeout(() => {
      setSuccessMsg("");
    }, 2000);

    // input clear
    setName("");
    setUsername("");
    setEmail("");
    setText("");
  };
  return (
    <>
      {loading ? (
        <center className="welcome loaderBox">
          <LoadingSpinner />
        </center>
      ) : (
        <form className="align-items-center helpForm" onSubmit={handleSubmit}>
          {successMsg && (
            <div className="alert alert-success">{successMsg}</div>
          )}

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Λnmol Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              rows={4}
              className="form-control"
              placeholder="How can I help you...?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Help;
