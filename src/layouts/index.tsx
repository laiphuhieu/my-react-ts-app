import GradientBackground from "@/components/GradientBg/GradientBg";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Container from "./_components/Container/Container";
import Projects from "./Projects/Projects";
import { profile } from "@/config/config";
import { contact } from "@/config/config";

const LandingPage = () => {
  return (
    <Layout>
      <div id="home">
        <GradientBackground>
          <Home contacts={contact.contacts} />
        </GradientBackground>
      </div>
      <div className="bg-[#E9ECEF]">
        <Container>
          <About image={profile.image} description={profile.description} />
        </Container>
      </div>
      <Container>
        <Projects />
      </Container>
    </Layout>
  );
};

export default LandingPage;
