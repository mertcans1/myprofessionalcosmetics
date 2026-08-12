"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { productCategories } from "@/lib/products";

export default function ProductSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();

    if (!text) return [];

    return productCategories.flatMap((category) =>
      category.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(text) ||
          product.brand.toLowerCase().includes(text) ||
          category.name.toLowerCase().includes(text) ||
          product.slug.toLowerCase().includes(text)
        );
      }).map((product) => ({
        ...product,
        categorySlug: category.slug,
        categoryName: category.name,
      }))
    );
  }, [query]);

  return (
    <div className="mb-14">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ürün ara..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-[#D4AF37]"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
          />
        </svg>
      </div>

      {query && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03]">
          {results.length === 0 ? (
            <p className="p-6 text-zinc-500">
              Sonuç bulunamadı.
            </p>
          ) : (
            results.map((product) => (
              <Link
                key={`${product.categorySlug}-${product.slug}`}
                href={`/urunler/${product.categorySlug}/${product.slug}`}
                className="flex items-center justify-between border-b border-white/5 p-5 transition hover:bg-white/5 last:border-none"
              >
                <div>
                  <p className="font-semibold text-white">
                    {product.name}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {product.brand} • {product.categoryName}
                  </p>
                </div>

                <span className="text-[#D4AF37]">
                  Gör →
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
