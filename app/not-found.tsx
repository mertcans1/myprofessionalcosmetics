import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#090909] text-white flex flex-col">

      <Navbar />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-24">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[160px]" />

        </div>

        <div className="relative text-center px-6">

          <span className="text-[#D4AF37] text-8xl lg:text-[140px] font-black leading-none">
            404
          </span>

          <h1 className="mt-8 text-3xl lg:text-4xl font-bold">
            Sayfa Bulunamadı
          </h1>

          <p className="mt-5 max-w-md mx-auto text-zinc-500 leading-7">
            Aradığınız sayfa taşınmış, silinmiş veya
            yanlış bir adres girmiş olabilirsiniz.
          </p>

          <Link
            href="/"
            className="inline-flex mt-9 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Ana Sayfaya Dön
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}