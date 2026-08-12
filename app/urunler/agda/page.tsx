import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Ağda | M&Y Kozmetik",
  description:
    "M&Y Kozmetik profesyonel kuaför ve güzellik salonları için ağda ürünleri.",
};

export default function AgdaPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white overflow-hidden">

      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-10 right-0 w-[650px] h-[550px] rounded-full bg-[#D4AF37]/8 blur-[170px]" />

          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div
            className="page-top"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-[#D4AF37] text-xs tracking-[5px] uppercase">
              M&Y Professional Cosmetics
            </span>
          </div>

          <div className="mt-5">

            <a
              href="/urunler"
              className="page-left inline-flex text-zinc-500 hover:text-[#D4AF37] transition-colors text-sm"
              style={{ animationDelay: "0.25s" }}
            >
              ← Ürünler
            </a>

          </div>

          <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">

            <span
              className="page-left inline-block"
              style={{ animationDelay: "0.4s" }}
            >
              Profesyonel
            </span>

            <br />

            <span
              className="page-left inline-block text-[#D4AF37]"
              style={{ animationDelay: "0.55s" }}
            >
              Ağda Ürünleri
            </span>

          </h1>

          <p
            className="page-left mt-7 max-w-2xl text-zinc-400 text-lg leading-8"
            style={{ animationDelay: "0.7s" }}
          >
            Profesyonel salonların günlük kullanımına yönelik
            ağda ürünlerini ve yardımcı sarf malzemelerini
            M&Y Kozmetik kalitesiyle sunuyoruz.
          </p>

        </div>

      </section>


      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-10">

            <div
              className="page-left"
              style={{ animationDelay: "0.85s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                Ürün Kataloğu
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Ağda Ürünleri
              </h2>

            </div>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


            <div
              className="page-left rounded-[30px] border border-white/10 bg-white/[0.025] overflow-hidden"
              style={{ animationDelay: "0.95s" }}
            >

              <div className="h-64 bg-white/[0.02] flex items-center justify-center">

                <span className="text-zinc-700 text-sm">
                  Ürün Fotoğrafı
                </span>

              </div>

              <div className="p-7">

                <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase">
                  M&Y Kozmetik
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Profesyonel Ağda
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-6">
                  Ürün bilgileri ve detayları yakında
                  eklenecektir.
                </p>

              </div>

            </div>


            <div
              className="page-bottom rounded-[30px] border border-white/10 bg-white/[0.025] overflow-hidden"
              style={{ animationDelay: "1.1s" }}
            >

              <div className="h-64 bg-white/[0.02] flex items-center justify-center">

                <span className="text-zinc-700 text-sm">
                  Ürün Fotoğrafı
                </span>

              </div>

              <div className="p-7">

                <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase">
                  M&Y Kozmetik
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Boncuk Ağda
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-6">
                  Ürün bilgileri ve detayları yakında
                  eklenecektir.
                </p>

              </div>

            </div>


            <div
              className="page-right rounded-[30px] border border-white/10 bg-white/[0.025] overflow-hidden"
              style={{ animationDelay: "1.25s" }}
            >

              <div className="h-64 bg-white/[0.02] flex items-center justify-center">

                <span className="text-zinc-700 text-sm">
                  Ürün Fotoğrafı
                </span>

              </div>

              <div className="p-7">

                <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase">
                  M&Y Kozmetik
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Ağda Spatulası
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-6">
                  Ürün bilgileri ve detayları yakında
                  eklenecektir.
                </p>

              </div>

            </div>


            <div
              className="page-left rounded-[30px] border border-white/10 bg-white/[0.025] overflow-hidden"
              style={{ animationDelay: "1.4s" }}
            >

              <div className="h-64 bg-white/[0.02] flex items-center justify-center">

                <span className="text-zinc-700 text-sm">
                  Ürün Fotoğrafı
                </span>

              </div>

              <div className="p-7">

                <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase">
                  M&Y Kozmetik
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Ağda Makinesi
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-6">
                  Ürün bilgileri ve detayları yakında
                  eklenecektir.
                </p>

              </div>

            </div>


            <div
              className="page-bottom rounded-[30px] border border-white/10 bg-white/[0.025] overflow-hidden"
              style={{ animationDelay: "1.55s" }}
            >

              <div className="h-64 bg-white/[0.02] flex items-center justify-center">

                <span className="text-zinc-700 text-sm">
                  Ürün Fotoğrafı
                </span>

              </div>

              <div className="p-7">

                <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase">
                  M&Y Kozmetik
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  Ağda Yağı
                </h3>

                <p className="mt-3 text-zinc-500 text-sm leading-6">
                  Ürün bilgileri ve detayları yakında
                  eklenecektir.
                </p>

              </div>

            </div>


            <div
              className="page-right rounded-[30px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-7 flex flex-col justify-center"
              style={{ animationDelay: "1.7s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                M&Y Kozmetik
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                Toplu Alım
              </h3>

              <p className="mt-4 text-zinc-500 leading-7">
                Profesyonel salonlar ve işletmeler için
                toplu ürün ve tedarik seçenekleri hakkında
                bilgi alabilirsiniz.
              </p>

              <a
                href="https://wa.me/905449964058"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit bg-[#D4AF37] text-black font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Bilgi Al
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}