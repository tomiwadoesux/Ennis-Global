import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Ticker from "./components/ticker";
import PracticeAreas from "./components/practice-areas";
import AboutGrid from "./components/about-grid";
import CaseStudies from "./components/case-studies";
import Quote from "./components/quote";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <PracticeAreas />
        <AboutGrid />
        <CaseStudies />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
