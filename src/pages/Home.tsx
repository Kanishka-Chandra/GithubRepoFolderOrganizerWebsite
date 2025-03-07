import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F6FC] to-white">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

export default Home;
