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
  Search,
  ArrowUpRight,
} from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { productCategories } from "@/lib/products";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedSearchQuery = searchQuery.trim().toLocaleLowerCase("tr-TR");

  const searchResults = normalizedSearchQuery
    ? productCategories.flatMap((category) =>
        category.products
          .filter((product) =>
            [product.name, product.brand, category.name, product.slug].some((value) =>
              value.toLocaleLowerCase("tr-TR").includes(normalizedSearchQuery)
            )
          )
          .map((product) => ({
            ...product,
            categorySlug: category.slug,
            categoryName: category.name,
          }))
      )
    : [];

  const clearSearch = () => setSearchQuery("");

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

          <div className="hidden lg:flex items-center gap-5">
            <nav className="flex items-center gap-6 xl:gap-7">
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

            {/* ÜST MENÜ ÜRÜN ARAMA */}

            <div className="relative w-[220px] xl:w-[250px]">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                size={17}
                strokeWidth={1.8}
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Ürün ara..."
                aria-label="Ürün ara"
                className="h-10 w-full rounded-full border border-white/10 bg-white/[0.035] pl-10 pr-9 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#D4AF37]/50 focus:bg-white/[0.06]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Aramayı temizle"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-[#D4AF37]"
                >
                  <X size={14} />
                </button>
              )}

              {searchQuery && (
                <div className="absolute right-0 top-12 z-[80] w-[310px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl">
                  <div className="border-b border-white/5 px-4 py-2.5 text-[10px] tracking-[2px] text-zinc-600 uppercase">
                    {searchResults.length} sonuç
                  </div>
                  {searchResults.length === 0 ? (
                    <p className="px-4 py-5 text-sm text-zinc-500">
                      “{searchQuery}” için ürün bulunamadı.
                    </p>
                  ) : (
                    <div className="max-h-[300px] overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={`${product.categorySlug}-${product.slug}`}
                          href={`/urunler/${product.categorySlug}/${product.slug}`}
                          className="group flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3.5 transition last:border-none hover:bg-white/[0.04]"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">{product.name}</p>
                            <p className="mt-1 truncate text-xs text-zinc-500">
                              {product.categoryName}
                            </p>
                          </div>
                          <ArrowUpRight
                            className="shrink-0 text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            size={16}
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

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
            {/* MOBİL ÜRÜN ARAMA */}
            <div className="relative mb-4">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
                strokeWidth={1.8}
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Ürün ara..."
                aria-label="Ürün ara"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.035] pl-11 pr-10 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#D4AF37]/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Aramayı temizle"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-[#D4AF37]"
                >
                  <X size={16} />
                </button>
              )}

              {searchQuery && (
                <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-xl">
                  <div className="border-b border-white/5 px-4 py-2.5 text-[10px] tracking-[2px] text-zinc-600 uppercase">
                    {searchResults.length} sonuç
                  </div>
                  {searchResults.length === 0 ? (
                    <p className="px-4 py-5 text-sm text-zinc-500">
                      “{searchQuery}” için ürün bulunamadı.
                    </p>
                  ) : (
                    <div className="max-h-[260px] overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={`mobile-${product.categorySlug}-${product.slug}`}
                          href={`/urunler/${product.categorySlug}/${product.slug}`}
                          onClick={closeMenu}
                          className="group flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3.5 transition last:border-none hover:bg-white/[0.04]"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">{product.name}</p>
                            <p className="mt-1 truncate text-xs text-zinc-500">{product.categoryName}</p>
                          </div>
                          <ArrowUpRight className="shrink-0 text-[#D4AF37]" size={16} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

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