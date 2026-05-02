import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Reviews from "@/components/Reviews";
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
      <Awards />
      <Reviews />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
