import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Your Future with SkillPath</h1>

        <p>
          Learn Web Development, React, JavaScript, UI/UX and many more
          industry-ready skills through our interactive courses.
        </p>

        <Link to="/contact">
          <button className="btn">Get Started</button>
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
          alt="Learning"
        />
      </div>
    </section>
  );
}

export default HeroSection;