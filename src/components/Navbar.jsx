import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">🎓 SkillPath</Link>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <div className="nav-buttons">

        <Link to="/signin" className="login-btn">
          Sign In
        </Link>

        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
