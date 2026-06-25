import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

function LandingPage() {
  const features = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, React and Node.js from scratch."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Build beautiful websites that work on every device."
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Industry-ready projects and interview preparation."
    }
  ];

  return (
    <>
      <Navbar />

      <HeroSection />

      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-container">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <TestimonialSection />

      <CTABanner />

      <Footer />
    </>
  );
}

export default LandingPage;