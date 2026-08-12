import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "M&Y Kozmetik hakkında bilgi edinin. Kuaför ve güzellik salonlarına profesyonel kozmetik ve sarf malzemeleri sunuyoruz.",
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white overflow-hidden">

      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-20 right-0 w-[650px] h-[550px] rounded-full bg-[#D4AF37]/8 blur-[170px]" />

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
              Profesyoneller İçin
            </span>

            <br />

            <span
              className="page-left inline-block text-[#D4AF37]"
              style={{ animationDelay: "0.45s" }}
            >
              Güvenilir Tedarik
            </span>

          </h1>

          <p
            className="page-left mt-7 max-w-2xl text-zinc-400 text-lg leading-8"
            style={{ animationDelay: "0.6s" }}
          >
            M&Y Kozmetik olarak kuaför ve güzellik
            profesyonellerinin ihtiyaçlarını kaliteli ürün
            ve güvenilir hizmet anlayışıyla karşılamayı
            hedefliyoruz.
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
                Biz Kimiz?
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                M&Y Kozmetik
              </h2>

              <p className="mt-6 text-zinc-500 leading-8">
                M&Y Kozmetik, kuaför, güzellik merkezi ve
                profesyonel salonların ihtiyaç duyduğu
                kozmetik ve sarf malzemelerini sunmak
                amacıyla oluşturulmuş profesyonel bir
                tedarik markasıdır.
              </p>

              <p className="mt-5 text-zinc-500 leading-8">
                Amacımız yalnızca ürün satmak değil,
                işletmelerin düzenli ve güvenilir bir
                tedarik noktası haline gelmektir.
              </p>

            </div>


            <div
              className="page-right rounded-[35px] border border-white/10 bg-white/[0.025] p-8 lg:p-12"
              style={{ animationDelay: "0.9s" }}
            >

              <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">
                Vizyonumuz
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                Profesyonel Çözüm Ortağı
              </h2>

              <p className="mt-6 text-zinc-500 leading-8">
                Kuaför ve güzellik sektöründeki işletmelerin
                ihtiyaçlarını yakından takip ederek kaliteli
                ürünleri ulaşılabilir hale getirmek istiyoruz.
              </p>

              <p className="mt-5 text-zinc-500 leading-8">
                Ankara'dan başlayarak güvenilir, hızlı ve
                profesyonel bir tedarik ağı oluşturmayı
                hedefliyoruz.
              </p>

            </div>

          </div>


          <div
            className="page-bottom mt-8 rounded-[35px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 lg:p-12 text-center"
            style={{ animationDelay: "1.05s" }}
          >

            <span className="text-[#D4AF37] text-xs tracking-[5px] uppercase">
              M&Y Professional Cosmetics
            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-bold">
              Profesyonelliğin ihtiyaç duyduğu her şey.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-zinc-500 leading-8">
              Ürünlerimiz ve tedarik hizmetimiz hakkında
              detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>

            <a
              href="/iletisim"
              className="inline-flex mt-8 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              İletişime Geçin
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}