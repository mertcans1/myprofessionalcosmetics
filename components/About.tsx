export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative py-32 bg-[#0b0b0b] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* SOL TARAF */}
          <div>

            <span className="text-[#D4AF37] text-sm tracking-[4px] uppercase">
              M&Y Kozmetik
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-black leading-tight">
              Profesyoneller İçin
              <br />
              <span className="text-[#D4AF37]">
                Güvenilir Tedarik
              </span>
            </h2>

            <p className="mt-7 text-zinc-400 text-lg leading-8">
              M&Y Kozmetik, kuaförler, güzellik merkezleri ve profesyonel
              salonların ihtiyaçlarına yönelik kozmetik ve sarf malzemelerini
              tek çatı altında sunmak amacıyla oluşturulmuş bir markadır.
            </p>

            <p className="mt-5 text-zinc-500 leading-8">
              Ürün seçiminden sipariş sürecine kadar profesyonel işletmelerin
              ihtiyaçlarını merkeze alıyor, kaliteli ürünleri ulaşılabilir ve
              pratik bir tedarik süreciyle sunmayı hedefliyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300">
                Profesyonel Ürünler
              </div>

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300">
                B2B Tedarik
              </div>

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300">
                Ankara
              </div>

            </div>

          </div>


          {/* SAĞ TARAF */}
          <div className="relative">

            <div className="relative rounded-[40px] border border-white/10 bg-white/[0.025] p-10 lg:p-14 overflow-hidden">

              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

              <div className="relative">

                <div className="text-[#D4AF37] text-7xl font-black">
                  M&Y
                </div>

                <div className="mt-4 text-sm tracking-[5px] text-zinc-500 uppercase">
                  Professional Wax & Cosmetics
                </div>

                <div className="w-16 h-[2px] bg-[#D4AF37] mt-8" />

                <p className="mt-8 text-zinc-400 leading-8">
                  Profesyonel salonların günlük ihtiyaçlarına odaklanan,
                  modern ve güvenilir bir kozmetik tedarik markası.
                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-[#D4AF37] text-2xl font-bold">
                      B2B
                    </div>

                    <div className="text-zinc-500 text-sm mt-2">
                      Profesyonel Tedarik
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-[#D4AF37] text-2xl font-bold">
                      M&Y
                    </div>

                    <div className="text-zinc-500 text-sm mt-2">
                      Kendi Markamız
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