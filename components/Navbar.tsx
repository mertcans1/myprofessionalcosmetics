"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Package,
  Truck,
  Info,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { siWhatsapp } from "simple-icons";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Ana Sayfa",
      href: "/",
      icon: Home,
    },
    {
      name: "Ürünler",
      href: "/urunler",
      icon: Package,
    },
    {
      name: "Tedarik",
      href: "/tedarik",
      icon: Truck,
    },
    {
      name: "Hakkımızda",
      href: "/hakkimizda",
      icon: Info,
    },
    {
      name: "İletişim",
      href: "/iletisim",
      icon: Phone,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-5 lg:px-8">
          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="M&Y Kozmetik"
              width={60}
              height={60}
              priority
              className="w-11 h-11 lg:w-[60px] lg:h-[60px] object-contain"
            />

            <div>
              <h2 className="text-lg lg:text-xl font-bold text-white tracking-tight">
                M&Y KOZMETİK
              </h2>

              <p className="text-[8px] lg:text-xs tracking-[2px] lg:tracking-[3px] text-[#D4AF37] uppercase">
                Professional Cosmetics
              </p>
            </div>
          </Link>

          {/* MASAÜSTÜ MENÜ */}

          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                    active
                      ? "text-[#D4AF37]"
                      : "text-zinc-300 hover:text-[#D4AF37]"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.8} />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* MASAÜSTÜ WHATSAPP */}

          <a
            href="https://wa.me/905449964058"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e3c45c] hover:scale-105 duration-300 text-black font-semibold px-6 py-3 rounded-full"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] fill-current"
              aria-hidden="true"
            >
              <path d={siWhatsapp.path} />
            </svg>

            WhatsApp
          </a>

          {/* MOBİL BUTON */}

          <button
            type="button"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden relative z-[70] w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.8} />
            ) : (
              <Menu size={25} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

      {/* MOBİL MENÜ */}

      {menuOpen && (
        <div className="fixed top-24 left-0 w-full z-[60] lg:hidden">
          <div className="bg-[#090909] border-t border-white/10 shadow-2xl px-5 py-5">
            <nav className="flex flex-col">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-4 py-4 border-b border-white/5 ${
                      active ? "text-[#D4AF37]" : "text-zinc-300"
                    }`}
                  >
                    <Icon size={19} strokeWidth={1.8} />

                    <span className="text-[15px]">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* MOBİL WHATSAPP */}

            <a
              href="https://wa.me/905449964058"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 mt-5 bg-[#D4AF37] text-black font-semibold py-4 rounded-full active:scale-[0.98] transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[19px] h-[19px] fill-current"
                aria-hidden="true"
              >
                <path d={siWhatsapp.path} />
              </svg>

              WhatsApp'tan İletişime Geç
            </a>
          </div>
        </div>
      )}
    </>
  );
}