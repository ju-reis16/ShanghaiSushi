import Hero from "./components/hero";
import About from "./components/about";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Contato from "./components/contato";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Menu />
      <CTA />
      <Testimonials />
      <Contato />
      <FAQ />
      <Footer />
    </div>
  );
}