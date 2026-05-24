import { useLenis } from "../lib/useLenis";
import { Header } from "../components/site/Header";
import { Hero } from "../components/site/Hero";
import { About } from "../components/site/About";
import { Services } from "../components/site/Services";
import { Gallery } from "../components/site/Gallery";
import { Testimonials } from "../components/site/Testimonials";
import { BookingCTA } from "../components/site/BookingCTA";
import { Footer } from "../components/site/Footer";

export default function Index() {
  useLenis();
  return (
    <div className="bg-cream min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
