import { Link } from "react-router-dom";

function CTABanner() {
  return (
    <section className="cta-banner">

      <h2>Ready to Start Your Learning Journey?</h2>

      <p>
        Join thousands of learners and build your dream career with SkillPath.
      </p>

      <Link to="/contact">
        <button className="btn">Contact Us</button>
      </Link>

    </section>
  );
}

export default CTABanner;