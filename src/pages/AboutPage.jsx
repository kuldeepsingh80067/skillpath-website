import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="page">
        <h1>About SkillPath</h1>

        <p>
          SkillPath is an online learning platform designed to help students
          master modern web development and programming skills through
          interactive courses and real-world projects.
        </p>

        <h2>Founder</h2>

        <p>
          <strong>Kuldeep Singh</strong>
        </p>

        <p>
          B.Tech CSE Student at Rajkiya Engineering College Ambedkar Nagar,
          AKTU. Passionate about Web Development, React, JavaScript and building
          modern applications.
        </p>

        <p>
          This project was created as part of a React learning assignment to
          demonstrate reusable components, React Router and responsive web
          design.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
