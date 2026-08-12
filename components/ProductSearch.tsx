"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, X } from "lucide-react";
import { productCategories } from "@/lib/products";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return productCategories.flatMap((category) =>
      category.products
        .filter((product) =>
          [product.name, product.brand, category.name, product.slug].some((value) =>
            value.toLocaleLowerCase("tr-TR").includes(normalizedQuery)
          )
        )
        .map((product) => ({
          ...product,
          categorySlug: category.slug,
          categoryName: category.name,
        }))
    );
  }, [normalizedQuery]);

  return (
    <div className="w-full">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">Ürün Arama</span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Aradığınız ürünü bulun</h2>
        </div>
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-[#D4AF37]"
          >
            <X size={15} />
            Temizle
          </button>
        )}
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" strokeWidth={1.8} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ürün adı, kategori veya marka ara..."
          aria-label="Ürün ara"
          className="w-full rounded-[22px] border border-white/10 bg-white/[0.04] py-4 pl-14 pr-6 text-white placeholder:text-zinc-600 outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.06]"
        />
      </div>

      {query && (
        <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-[#0d0d0d] shadow-2xl">
          <div className="border-b border-white/5 px-5 py-3 text-xs tracking-[2px] text-zinc-600 uppercase">
            {results.length} sonuç
          </div>

          {results.length === 0 ? (
            <p className="px-5 py-7 text-sm text-zinc-500">
              “{query}” için ürün bulunamadı.
            </p>
          ) : (
            <div className="max-h-[360px] overflow-y-auto">
              {results.map((product) => (
                <Link
                  key={`${product.categorySlug}-${product.slug}`}
                  href={`/urunler/${product.categorySlug}/${product.slug}`}
                  className="group flex items-center justify-between gap-5 border-b border-white/5 px-5 py-4 transition hover:bg-white/[0.04] last:border-none"
                >
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">{product.name}</p>
                    <p className="mt-1 truncate text-sm text-zinc-500">
                      {product.brand} <span className="text-zinc-700">•</span> {product.categoryName}
                    </p>
                  </div>
                  <ArrowUpRight className="shrink-0 text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
