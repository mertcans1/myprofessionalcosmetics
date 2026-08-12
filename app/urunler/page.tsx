import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Ürünler | M&Y Kozmetik",
  description:
    "M&Y Kozmetik profesyonel kuaför ve güzellik salonları için kozmetik ve sarf malzemeleri.",
};

export default function UrunlerPage() {
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

          <h1 className="mt-5 text-5xl lg:text-7xl font-black leading-tight">

            <span
              className="page-left inline-block"
              style={{ animationDelay: "0.3s" }}
            >
              Profesyonel
            </span>

            <br />

            <span
              className="page-left inline-block text-[#D4AF37]"
              style={{ animationDelay: "0.45s" }}
            >
              Ürünler
            </span>

          </h1>

          <p
            className="page-left mt-7 max-w-2xl text-zinc-400 text-lg leading-8"
            style={{ animationDelay: "0.6s" }}
          >
            Kuaför, güzellik merkezi ve profesyonel salonların
            günlük ihtiyaçlarına yönelik ürün gruplarını
            keşfedin.
          </p>

        </div>

      </section>


      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div
            className="page-bottom mb-10"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
              Ürün Kategorileri
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Profesyonel Ürünler
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* 01 - AĞDA */}

            <a
              href="/urunler/agda"
              className="page-left group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 hover:border-[#D4AF37]/40 hover:bg-white/[0.04] transition-all duration-500"
              style={{ animationDelay: "0.85s" }}
            >

              <div className="flex items-start justify-between">

                <span className="text-[#D4AF37] text-xs tracking-[4px]">
                  01
                </span>

                <span className="text-zinc-600 group-hover:text-[#D4AF37] transition-colors text-xl">
                  ↗
                </span>

              </div>

              <h2 className="mt-12 text-2xl font-bold">
                Ağda
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Profesyonel salonlar için ağda ürünleri
                ve ilgili sarf malzemeleri.
              </p>

              <div className="mt-8 text-sm text-[#D4AF37]">
                Ürünleri Görüntüle ↗
              </div>

            </a>


            {/* 02 - BOYA & OKSİDAN */}

            <div
              className="page-right group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 hover:border-white/20 transition-all duration-500"
              style={{ animationDelay: "1s" }}
            >

              <div className="flex items-start justify-between">

                <span className="text-[#D4AF37] text-xs tracking-[4px]">
                  02
                </span>

                <span className="text-zinc-700 text-xl">
                  —
                </span>

              </div>

              <h2 className="mt-12 text-2xl font-bold">
                Boya & Oksidan
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Profesyonel saç boyama işlemleri için
                gerekli ürün grubu.
              </p>

              <div className="mt-8 text-sm text-zinc-500">
                Ürün grubu hazırlanıyor
              </div>

            </div>


            {/* 03 - TEK KULLANIMLIK */}

            <div
              className="page-left group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 hover:border-white/20 transition-all duration-500"
              style={{ animationDelay: "1.15s" }}
            >

              <div className="flex items-start justify-between">

                <span className="text-[#D4AF37] text-xs tracking-[4px]">
                  03
                </span>

                <span className="text-zinc-700 text-xl">
                  —
                </span>

              </div>

              <h2 className="mt-12 text-2xl font-bold">
                Tek Kullanımlık
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Eldiven, havlu, örtü ve profesyonel
                salon sarf malzemeleri.
              </p>

              <div className="mt-8 text-sm text-zinc-500">
                Ürün grubu hazırlanıyor
              </div>

            </div>


            {/* 04 - KUAFÖR EKİPMANLARI */}

            <div
              className="page-right group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 hover:border-white/20 transition-all duration-500"
              style={{ animationDelay: "1.3s" }}
            >

              <div className="flex items-start justify-between">

                <span className="text-[#D4AF37] text-xs tracking-[4px]">
                  04
                </span>

                <span className="text-zinc-700 text-xl">
                  —
                </span>

              </div>

              <h2 className="mt-12 text-2xl font-bold">
                Kuaför Ekipmanları
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Profesyonel salonların ihtiyaç duyduğu
                ekipman ve yardımcı ürünler.
              </p>

              <div className="mt-8 text-sm text-zinc-500">
                Ürün grubu hazırlanıyor
              </div>

            </div>


            {/* 05 - GÜZELLİK ÜRÜNLERİ */}

            <div
              className="page-left group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 hover:border-white/20 transition-all duration-500"
              style={{ animationDelay: "1.45s" }}
            >

              <div className="flex items-start justify-between">

                <span className="text-[#D4AF37] text-xs tracking-[4px]">
                  05
                </span>

                <span className="text-zinc-700 text-xl">
                  —
                </span>

              </div>

              <h2 className="mt-12 text-2xl font-bold">
                Güzellik Ürünleri
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Güzellik merkezleri için profesyonel
                kullanım ürünleri.
              </p>

              <div className="mt-8 text-sm text-zinc-500">
                Ürün grubu hazırlanıyor
              </div>

            </div>


            {/* 06 - YENİ ÜRÜNLER */}

            <div
              className="page-bottom rounded-[30px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 hover:bg-[#D4AF37]/[0.07] transition-all duration-500"
              style={{ animationDelay: "1.6s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                M&Y
              </span>

              <h2 className="mt-12 text-2xl font-bold">
                Yeni Ürünler
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Ürün yelpazemiz genişledikçe yeni
                kategoriler burada yer alacak.
              </p>

              <a
                href="/iletisim"
                className="inline-block mt-8 text-sm text-[#D4AF37] hover:text-white transition-colors"
              >
                Bilgi Al →
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}