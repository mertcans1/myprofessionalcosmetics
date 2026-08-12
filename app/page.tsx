import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#090909] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <Footer />

    </main>
  );
}