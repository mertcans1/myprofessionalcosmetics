import {
  siWhatsapp,
  siInstagram,
  siGmail,
} from "simple-icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* MARKA */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              M&Y KOZMETİK
            </h2>

            <p className="mt-2 text-xs tracking-[3px] text-[#D4AF37] uppercase">
              Professional Cosmetics
            </p>

            <p className="mt-6 max-w-sm text-zinc-500 leading-7">
              Kuaför ve güzellik profesyonelleri için kozmetik
              ve salon ürünleri.
            </p>
          </div>


          {/* HIZLI MENÜ */}

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-[3px]">
              Hızlı Menü
            </h3>

            <div className="flex flex-col gap-4 mt-6">

              <a
                href="/"
                className="text-zinc-500 hover:text-[#D4AF37] transition-colors"
              >
                Ana Sayfa
              </a>

              <a
                href="/urunler"
                className="text-zinc-500 hover:text-[#D4AF37] transition-colors"
              >
                Ürünler
              </a>

              <a
                href="/tedarik"
                className="text-zinc-500 hover:text-[#D4AF37] transition-colors"
              >
                Tedarik
              </a>

              <a
                href="/hakkimizda"
                className="text-zinc-500 hover:text-[#D4AF37] transition-colors"
              >
                Hakkımızda
              </a>

              <a
                href="/iletisim"
                className="text-zinc-500 hover:text-[#D4AF37] transition-colors"
              >
                İletişim
              </a>

            </div>
          </div>


          {/* İLETİŞİM */}

          <div>

            <h3 className="text-sm font-semibold text-white uppercase tracking-[3px]">
              İletişim
            </h3>

            <div className="flex flex-col gap-5 mt-6">


              {/* WHATSAPP */}

              <a
                href="https://wa.me/905449964058"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors"
              >

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d={siWhatsapp.path} />
                </svg>

                <span>
                  0544 996 40 58
                </span>

              </a>


              {/* GMAIL */}

              <a
                href="mailto:myprofessionalcosmetics@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors"
              >

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d={siGmail.path} />
                </svg>

                <span className="break-all">
                  myprofessionalcosmetics@gmail.com
                </span>

              </a>


              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/m.y_professional/?hl=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors"
              >

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d={siInstagram.path} />
                </svg>

                <span>
                  @m.y_professional
                </span>

              </a>


              {/* KONUM */}

              <div className="flex items-center gap-3 text-zinc-400">

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span>
                  Ankara
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ALT */}

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} M&Y Kozmetik. Tüm hakları saklıdır.
          </p>

          <p className="text-xs text-zinc-700">
            Professional Wax & Cosmetics
          </p>

        </div>

      </div>

    </footer>
  );
}