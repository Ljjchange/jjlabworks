import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Topics from "@/src/components/Topics";
import SocialLinks from "@/src/components/SocialLinks";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Topics />
        <SocialLinks />
      </main>

      <Footer />
    </>
  );
}