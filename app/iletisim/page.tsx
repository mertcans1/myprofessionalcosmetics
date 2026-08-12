import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "İletişim | M&Y Kozmetik",
  description:
    "M&Y Kozmetik ile iletişime geçin. Ankara'daki profesyonel kuaför ve güzellik salonları için kozmetik ve sarf malzemeleri.",
};

export default function IletisimPage() {
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
              Bizimle
            </span>

            <br />

            <span
              className="page-left inline-block text-[#D4AF37]"
              style={{ animationDelay: "0.45s" }}
            >
              İletişime Geçin
            </span>

          </h1>

          <p
            className="page-left mt-7 max-w-2xl text-zinc-400 text-lg leading-8"
            style={{ animationDelay: "0.6s" }}
          >
            Ürünlerimiz, tedarik hizmetimiz ve işletmenize
            özel çözümler hakkında bilgi almak için
            bizimle iletişime geçebilirsiniz.
          </p>

        </div>

      </section>


      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-8">

            <div
              className="page-left rounded-[35px] border border-white/10 bg-white/[0.025] p-8 lg:p-12"
              style={{ animationDelay: "0.75s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                İletişim Bilgileri
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                M&Y Kozmetik
              </h2>

              <div className="mt-10 space-y-7">

                <a
                  href="https://wa.me/905449964058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >

                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                    <span className="text-xl">✆</span>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-[3px]">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-zinc-300 group-hover:text-[#D4AF37] transition-colors">
                      0544 996 40 58
                    </p>
                  </div>

                </a>


                <a
                  href="mailto:myprofessionalcosmetics@gmail.com"
                  className="flex items-center gap-5 group"
                >

                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                    <span className="text-xl">✉</span>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-[3px]">
                      E-Mail
                    </p>

                    <p className="mt-1 text-zinc-300 group-hover:text-[#D4AF37] transition-colors break-all">
                      myprofessionalcosmetics@gmail.com
                    </p>
                  </div>

                </a>


                <a
                  href="https://www.instagram.com/m.y_professional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >

                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                    <span className="text-xl">◎</span>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-[3px]">
                      Instagram
                    </p>

                    <p className="mt-1 text-zinc-300 group-hover:text-[#D4AF37] transition-colors">
                      @m.y_professional
                    </p>
                  </div>

                </a>


                <div className="flex items-center gap-5">

                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <span className="text-xl">⌖</span>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-[3px]">
                      Konum
                    </p>

                    <p className="mt-1 text-zinc-300">
                      Ankara
                    </p>
                  </div>

                </div>

              </div>

            </div>


            <div
              className="page-right rounded-[35px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 lg:p-12 flex flex-col justify-center"
              style={{ animationDelay: "0.9s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                Hızlı İletişim
              </span>

              <h2 className="mt-5 text-3xl lg:text-4xl font-bold">
                WhatsApp üzerinden
                <br />
                bize ulaşın.
              </h2>

              <p className="mt-6 text-zinc-500 leading-8 max-w-lg">
                Ürünler, fiyatlandırma, toplu alımlar veya
                tedarik hakkında hızlıca bilgi almak için
                WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
              </p>

              <a
                href="https://wa.me/905449964058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit mt-8 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
              >
                WhatsApp'tan Yazın
              </a>

            </div>

          </div>


          <div
            className="page-bottom mt-8 rounded-[35px] border border-white/10 bg-white/[0.025] p-8 lg:p-12 text-center"
            style={{ animationDelay: "1.05s" }}
          >

            <span className="text-[#D4AF37] text-xs tracking-[5px] uppercase">
              Ankara
            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-bold">
              Profesyonel tedarik için buradayız.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-zinc-500 leading-8">
              M&Y Kozmetik ile çalışmak veya ürünlerimiz
              hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}