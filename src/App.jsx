import "./App.css";

import { Routes, Route } from "react-router-dom";

import Packages from "./components/packages/Packages";
import Instagram from "./components/instagram/Instagram";
import Footer from "./components/footer/footer";
import Gallery from "./pages/Gallery";
import Location from "./components/location/Location";
import Featured from "./components/featured/featured";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Awards from "./components/award/Awards";
import BrandBanner from "./components/banner/Banner";

function HomePage() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* <section id="featured">
        <Featured />
      </section> */}

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="awards">
        <Awards/>
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="instagram">
        <Instagram />
      </section>
    <section id="banner">
      <BrandBanner/>
    </section>
      <section id="location">
        <Location />
      </section>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;