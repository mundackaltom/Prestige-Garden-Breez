import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Overview from "./components/Overview";
import Highlights from "./components/Highlights";
import FloorPlans from "./components/FloorPlans";
import ProjectFilm from "./components/ProjectFilm";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ClosingBanner from "./components/ClosingBanner";
import Footer from "./components/Footer";
import { SHOW_PRICING_SECTION, FORM_SUCCESS_MESSAGE } from "./site-config";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Overview />
      <Highlights />
      <FloorPlans />
      <ProjectFilm />
      <Gallery />
      <Location />
      {SHOW_PRICING_SECTION && <Pricing />}
      <Contact successMessage={FORM_SUCCESS_MESSAGE} />
      <ClosingBanner />
      <Footer />
    </>
  );
}
