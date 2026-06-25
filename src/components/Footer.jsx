import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <h2>SkillPath</h2>

      <p>Learn Modern Web Development with Interactive Courses.</p>

      <div className="footer-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <p>© 2026 SkillPath. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;