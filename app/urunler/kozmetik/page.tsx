import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function KozmetikPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-20 right-0 w-[600px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[160px]" />

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <a
            href="/urunler"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#D4AF37] transition-colors"
          >
            ← Ürünler
          </a>

          <div className="mt-10">

            <span className="text-[#D4AF37] text-xs tracking-[5px] uppercase">
              M&Y Kozmetik
            </span>

            <h1 className="mt-5 text-5xl lg:text-6xl font-black">
              Kozmetik
              <span className="text-[#D4AF37]"> Ürünleri</span>
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-8">
              Profesyonel salon ve güzellik merkezleri için
              M&Y Kozmetik ürünleri.
            </p>

          </div>

        </div>

      </section>


      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="rounded-[35px] border border-white/10 bg-white/[0.025] min-h-[350px] flex items-center justify-center text-center p-10">

            <div>

              <div className="mx-auto w-16 h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center">

                <span className="text-[#D4AF37] text-2xl">
                  +
                </span>

              </div>

              <h2 className="mt-7 text-2xl font-bold">
                Ürünler Hazırlanıyor
              </h2>

              <p className="mt-4 max-w-md mx-auto text-zinc-500 leading-7">
                M&Y Kozmetik ürünleri yakında burada
                listelenecek.
              </p>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}