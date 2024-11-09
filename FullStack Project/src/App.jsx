import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ProjectsAndClients from "./components/ProjectsAndClients";
import NewsAndSubscription from "./components/NewsAndSubscription";
import "./App.css";

export const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="services">
        <AboutUs />
      </div>

      <div id="about-product">
        <ProjectsAndClients />
      </div>

      <div id="subs">
        <NewsAndSubscription />
      </div>
    </>
  )
}
