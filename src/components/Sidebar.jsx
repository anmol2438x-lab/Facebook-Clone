import { VscEyeClosed } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark  ${menuOpen ? "active" : ""}`}
      style={{ width: "200px" }}
    >
      <button className="close-btn" onClick={() => setMenuOpen(false)}>
        <VscEyeClosed />
      </button>
      <span className=" logo3d">BuzzBook</span>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/saved"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Saved
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/settings"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Settings
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/help"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Help
          </NavLink>
        </li>
      </ul>

      <hr />

      <div className="mt-auto">
        <div className="d-flex align-items-center">
          <NavLink to="/profile" className={`name`}>
            <img
              src="/Ak img.png"
              alt="profile"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Λnmol</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
