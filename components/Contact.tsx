export default function Contact() {
  return (
    <section
      id="iletisim"
      className="relative py-32 bg-[#090909] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="relative rounded-[45px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_40%)]" />

          <div className="relative grid lg:grid-cols-2 gap-16 p-10 lg:p-16">

            {/* SOL */}
            <div>

              <span className="text-[#D4AF37] text-sm tracking-[4px] uppercase">
                İletişim
              </span>

              <h2 className="mt-5 text-4xl lg:text-5xl font-black leading-tight">
                İhtiyacınız Olan
                <br />
                <span className="text-[#D4AF37]">
                  Ürünü Sorun.
                </span>
              </h2>

              <p className="mt-7 text-zinc-400 text-lg leading-8 max-w-xl">
                Ürün, fiyat ve stok bilgisi için bizimle doğrudan iletişime
                geçebilirsiniz. M&Y Kozmetik olarak profesyonel salonların
                ihtiyaçlarına hızlı şekilde cevap vermeyi hedefliyoruz.
              </p>

              <a
                href="https://wa.me/905449964058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-9 py-4 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#e3c45c] hover:scale-105 transition-all duration-300"
              >
                WhatsApp'tan Yazın
                <span className="text-lg">↗</span>
              </a>

            </div>


            {/* SAĞ */}
            <div className="flex flex-col justify-center gap-5">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/905449964058"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white/10 bg-black/30 p-6 hover:border-[#D4AF37]/40 transition-all duration-300"
              >

                <div className="flex items-center gap-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-xl">
                    ↗
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500">
                      WhatsApp
                    </div>

                    <div className="mt-1 text-white font-semibold">
                      0544 996 40 58
                    </div>
                  </div>

                </div>

              </a>


              {/* BÖLGE */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">

                <div className="flex items-center gap-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-xl">
                    ●
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500">
                      Hizmet Bölgesi
                    </div>

                    <div className="mt-1 text-white font-semibold">
                      Ankara
                    </div>
                  </div>

                </div>

              </div>


              {/* ÇALIŞMA */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">

                <div className="flex items-center gap-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-xl">
                    +
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500">
                      Müşteri Hizmetleri
                    </div>

                    <div className="mt-1 text-white font-semibold">
                      Hızlı WhatsApp İletişimi
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}