import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise relative isolate">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Impact />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
