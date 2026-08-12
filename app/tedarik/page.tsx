import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Tedarik | M&Y Kozmetik",
  description:
    "M&Y Kozmetik, Ankara'daki kuaför ve güzellik salonlarına profesyonel kozmetik ve sarf malzemeleri tedarik eder.",
};

export default function TedarikPage() {
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
              Tedarik
            </span>

          </h1>

          <p
            className="page-left mt-7 max-w-2xl text-zinc-400 text-lg leading-8"
            style={{ animationDelay: "0.6s" }}
          >
            Kuaför, güzellik merkezi ve profesyonel salonların
            ihtiyaç duyduğu ürünleri güvenilir ve düzenli
            şekilde tedarik ediyoruz.
          </p>

        </div>

      </section>

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-6">

            <div
              className="page-left rounded-[30px] border border-white/10 bg-white/[0.025] p-8"
              style={{ animationDelay: "0.75s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px]">
                01
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                Geniş Ürün
                <br />
                Çeşitliliği
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Salonların günlük ihtiyaçlarına yönelik
                farklı ürün gruplarını tek noktadan
                temin etmenizi sağlıyoruz.
              </p>

            </div>

            <div
              className="page-left rounded-[30px] border border-white/10 bg-white/[0.025] p-8"
              style={{ animationDelay: "0.9s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px]">
                02
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                Profesyonel
                <br />
                Hizmet
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                İşletmenizin ihtiyaçlarını anlayarak
                düzenli ve güvenilir tedarik hizmeti
                sunuyoruz.
              </p>

            </div>

            <div
              className="page-right rounded-[30px] border border-white/10 bg-white/[0.025] p-8"
              style={{ animationDelay: "1.05s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px]">
                03
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                Ankara
                <br />
                Odaklı
              </h2>

              <p className="mt-4 text-zinc-500 leading-7">
                Ankara'daki profesyonel salonlara
                hızlı ve doğrudan tedarik hizmeti
                sunuyoruz.
              </p>

            </div>

          </div>

          <div
            className="page-bottom mt-8 rounded-[35px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{ animationDelay: "1.2s" }}
          >

            <div>

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                İşletmelere Özel
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Tedarik hakkında bilgi alın
              </h2>

              <p className="mt-4 text-zinc-500 max-w-xl leading-7">
                Ürünler, fiyatlandırma ve işletmenize özel
                tedarik seçenekleri hakkında bizimle
                iletişime geçebilirsiniz.
              </p>

            </div>

            <a
              href="https://wa.me/905449964058"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              WhatsApp'tan Ulaşın
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}