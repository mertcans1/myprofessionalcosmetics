export default function Products() {
  const categories = [
    {
      title: "Ağda Ürünleri",
      description:
        "Profesyonel salonlar için kartuş ağda, konserve ağda ve farklı ağda çeşitleri.",
      items: ["Kartuş Ağda", "Konserve Ağda", "Pudralı Ağda"],
    },
    {
      title: "Kuaför Sarf Malzemeleri",
      description:
        "Salonların günlük operasyonlarında ihtiyaç duyduğu kaliteli sarf ürünleri.",
      items: ["Eldiven", "Havlu", "Bone", "Önlük", "Tek Kullanımlık Ürünler"],
    },
    {
      title: "Kozmetik Ürünleri",
      description:
        "Kuaför ve güzellik merkezleri için profesyonel bakım ve kozmetik ürünleri.",
      items: ["Boya", "Oksidan", "Şampuan", "Bakım Ürünleri"],
    },
    {
      title: "Salon Ekipmanları",
      description:
        "Profesyonel salonların ihtiyaçlarına yönelik ekipman ve yardımcı ürünler.",
      items: ["Ağda Makinesi", "Kuaför Ekipmanları", "Salon Gereçleri"],
    },
  ];

  return (
    <section
      id="urunler"
      className="relative py-32 bg-[#0b0b0b] overflow-hidden"
    >
      {/* Arka plan ışığı */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* BAŞLIK */}
        <div className="max-w-2xl mb-16">

          <span className="text-[#D4AF37] text-sm tracking-[4px] uppercase">
            Ürün Kategorileri
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black">
            Profesyonel Salonların
            <br />
            <span className="text-[#D4AF37]">
              İhtiyaçları
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Kuaför ve güzellik salonlarının günlük ihtiyaçları için
            profesyonel kozmetik ve sarf malzemelerini tek noktadan
            temin edin.
          </p>

        </div>


        {/* KATEGORİLER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative min-h-[360px] rounded-[30px] border border-white/10 bg-white/[0.025] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/[0.045]"
            >

              {/* Numara */}
              <div className="absolute top-6 right-7 text-5xl font-black text-white/[0.04] group-hover:text-[#D4AF37]/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Altın çizgi */}
              <div className="w-10 h-[2px] bg-[#D4AF37] mb-8 transition-all duration-500 group-hover:w-20" />

              <h3 className="text-xl font-bold text-white">
                {category.title}
              </h3>

              <p className="mt-4 text-sm text-zinc-500 leading-7">
                {category.description}
              </p>

              {/* Ürünler */}
              <div className="mt-7 space-y-3">

                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {item}
                  </div>
                ))}

              </div>

              {/* Hover ışığı */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            </div>
          ))}

        </div>


        {/* ALT CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-10">

          <div>
            <h3 className="text-xl font-semibold">
              Aradığınız ürün listede yok mu?
            </h3>

            <p className="text-zinc-500 mt-2">
              İhtiyacınızı WhatsApp üzerinden bize iletin.
            </p>
          </div>

          <a
            href="https://wa.me/905449964058"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            Ürün Sor ↗
          </a>

        </div>

      </div>
    </section>
  );
}