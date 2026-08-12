export default function WhyUs() {
  const features = [
    {
      number: "01",
      title: "Profesyonel Tedarik",
      description:
        "Kuaför ve güzellik salonlarının günlük ihtiyaçlarına yönelik profesyonel ürünleri tek noktadan sunuyoruz.",
    },
    {
      number: "02",
      title: "Ankara İçi Teslimat",
      description:
        "Ankara'daki işletmelere hızlı ve pratik ürün tedariği sağlamak için yerel dağıtım ağıyla çalışıyoruz.",
    },
    {
      number: "03",
      title: "İşletmelere Özel",
      description:
        "Bireysel kullanımdan ziyade profesyonel salonların ihtiyaçlarını ve düzenli sipariş süreçlerini ön planda tutuyoruz.",
    },
    {
      number: "04",
      title: "Kolay Sipariş",
      description:
        "İhtiyacınız olan ürünleri WhatsApp üzerinden hızlıca sorabilir, fiyat ve stok bilgisi alabilirsiniz.",
    },
  ];

  return (
    <section
      id="hakkimizda"
      className="relative py-32 bg-[#090909] overflow-hidden"
    >
      {/* ARKA PLAN */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        {/* ÜST BAŞLIK */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">

          <div>
            <span className="text-[#D4AF37] text-sm tracking-[4px] uppercase">
              Neden M&Y?
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-black leading-tight">
              Salonunuzun İhtiyacı,
              <br />
              <span className="text-[#D4AF37]">
                Bizim İşimiz.
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl lg:ml-auto">
            M&Y Kozmetik olarak kuaför, güzellik merkezi ve profesyonel
            salonların ürün tedarik sürecini daha hızlı ve kolay hale
            getirmeyi amaçlıyoruz.
          </p>

        </div>


        {/* ÖZELLİKLER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative p-8 border-b md:border-r lg:border-b-0 border-white/10 transition-all duration-500 hover:bg-white/[0.025]"
            >

              {/* NUMARA */}
              <div className="text-[#D4AF37] text-sm tracking-[3px] font-semibold">
                {feature.number}
              </div>

              {/* BAŞLIK */}
              <h3 className="mt-8 text-xl font-bold text-white">
                {feature.title}
              </h3>

              {/* AÇIKLAMA */}
              <p className="mt-5 text-sm text-zinc-500 leading-7">
                {feature.description}
              </p>

              {/* ALT ÇİZGİ */}
              <div className="mt-8 w-8 h-[2px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500" />

            </div>
          ))}

        </div>


        {/* ALT BANNER */}
        <div className="relative mt-20 rounded-[35px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(212,175,55,0.12),transparent_45%)]" />

          <div className="relative p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div>
              <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase">
                Profesyonel İşletmeler İçin
              </span>

              <h3 className="mt-4 text-2xl lg:text-3xl font-bold">
                Düzenli ürün tedariği mi arıyorsunuz?
              </h3>

              <p className="mt-3 text-zinc-500">
                İhtiyacınızı bize iletin, ürün ve fiyat bilgisi alalım.
              </p>
            </div>

            <a
              href="https://wa.me/905449964058"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#e3c45c] hover:scale-105 transition-all duration-300"
            >
              WhatsApp'tan İletişime Geç ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}