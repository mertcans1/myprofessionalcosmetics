export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909]">

      <div className="absolute inset-0">

        <div className="absolute top-40 right-32 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />

      </div>


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-40 pb-20 lg:pb-24">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">


          {/* SOL TARAF */}

          <div>

            <span
              className="hero-item hero-left inline-flex border border-[#D4AF37]/40 rounded-full px-5 py-2 text-[#D4AF37] text-xs lg:text-sm tracking-[3px] lg:tracking-[4px] uppercase"
              style={{ animationDelay: "0.15s" }}
            >
              M&Y Professional Cosmetics
            </span>


            <h1 className="mt-7 lg:mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]">

              <span
                className="hero-item hero-left block"
                style={{ animationDelay: "0.3s" }}
              >
                Profesyonel
              </span>


              <span
                className="hero-item hero-left block text-[#D4AF37]"
                style={{ animationDelay: "0.45s" }}
              >
                Kuaför
              </span>


              <span
                className="hero-item hero-left block"
                style={{ animationDelay: "0.6s" }}
              >
                Sarf Malzemeleri
              </span>

            </h1>


            <p
              className="hero-item hero-left mt-7 lg:mt-8 text-zinc-400 text-base lg:text-lg leading-8 max-w-xl"
              style={{ animationDelay: "0.75s" }}
            >
              Ankara'daki kuaför, güzellik merkezi ve
              profesyonel salonlara kaliteli kozmetik ve
              sarf malzemeleri tedarik ediyoruz.
            </p>


            <div
              className="hero-item hero-left flex flex-col sm:flex-row gap-4 sm:gap-5 mt-9 lg:mt-12"
              style={{ animationDelay: "0.9s" }}
            >

              <a
                href="/urunler"
                className="text-center px-8 lg:px-9 py-4 rounded-full bg-[#D4AF37] text-black font-semibold hover:scale-105 duration-300"
              >
                Ürünleri İncele
              </a>


              <a
                href="https://wa.me/905449964058"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-8 lg:px-9 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black duration-300"
              >
                WhatsApp
              </a>

            </div>


            <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-14 lg:mt-20">

              <div
                className="hero-item hero-left"
                style={{ animationDelay: "1.05s" }}
              >

                <h2 className="text-3xl lg:text-4xl font-bold text-[#D4AF37]">
                  100+
                </h2>

                <p className="text-zinc-500 text-sm lg:text-base mt-2">
                  Ürün
                </p>

              </div>


              <div
                className="hero-item hero-left"
                style={{ animationDelay: "1.2s" }}
              >

                <h2 className="text-2xl lg:text-4xl font-bold text-[#D4AF37]">
                  Aynı Gün
                </h2>

                <p className="text-zinc-500 text-sm lg:text-base mt-2">
                  Teslimat
                </p>

              </div>


              <div
                className="hero-item hero-left"
                style={{ animationDelay: "1.35s" }}
              >

                <h2 className="text-3xl lg:text-4xl font-bold text-[#D4AF37]">
                  B2B
                </h2>

                <p className="text-zinc-500 text-sm lg:text-base mt-2">
                  Toptan Satış
                </p>

              </div>

            </div>

          </div>


          {/* SAĞ TARAF */}

          <div className="relative flex justify-center mt-4 lg:mt-0">

            <div
              className="hero-item hero-right absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[540px] lg:h-[540px] rounded-full bg-[#D4AF37]/15 blur-[120px]"
              style={{ animationDelay: "0.25s" }}
            />


            <div
              className="hero-item hero-right relative w-full max-w-[520px] h-[500px] sm:h-[580px] lg:h-[620px] rounded-[35px] lg:rounded-[45px] border border-white/10 bg-white/[0.035] backdrop-blur-xl shadow-[0_0_70px_rgba(0,0,0,.6)] overflow-hidden"
              style={{ animationDelay: "0.4s" }}
            >

              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.025] to-transparent" />


              <div
                className="hero-item hero-top flex justify-center pt-14 sm:pt-16"
                style={{ animationDelay: "0.8s" }}
              >

                <img
                  src="/logo.png"
                  alt="M&Y Kozmetik"
                  className="w-[220px] sm:w-[270px] lg:w-[300px] object-contain"
                />

              </div>


              <div
                className="hero-item hero-bottom absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8"
                style={{ animationDelay: "1.05s" }}
              >

                <div className="rounded-3xl bg-black/50 border border-white/10 backdrop-blur-xl p-6 sm:p-7">

                  <div className="flex items-center gap-3">

                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />

                    <span className="text-xs text-zinc-500 uppercase tracking-[3px]">
                      M&Y Kozmetik
                    </span>

                  </div>


                  <h3 className="mt-4 text-[#D4AF37] text-xl font-semibold">
                    Kurumsal Tedarik
                  </h3>


                  <p className="text-zinc-400 mt-4 leading-7 text-sm sm:text-base">

                    Ağda, boya, oksidan, eldiven,
                    havlu, tek kullanımlık ürünler,
                    kuaför ekipmanları ve çok daha fazlası.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}