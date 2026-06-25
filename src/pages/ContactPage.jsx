import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="page">
        <h1>Contact Me</h1>

        <p>
          Feel free to connect with me for projects, internships, or
          collaborations.
        </p>

        <div className="contact-info">
          <h3>👨‍💻 Kuldeep Singh</h3>

          <p>
            📧 Email:
            <br />
            <a href="mailto:kilbilbaba4@gmail.com">
              kilbilbaba4@gmail.com
            </a>
          </p>

          <p>
            💼 LinkedIn:
            <br />
            <a
              href="https://www.linkedin.com/in/kuldeep-singh-212b09250/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/kuldeep-singh-212b09250
            </a>
          </p>

          <p>
            💻 GitHub:
            <br />
            <a
              href="https://github.com/kuldeepsingh80067"
              target="_blank"
              rel="noreferrer"
            >
              github.com/kuldeepsingh80067
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;