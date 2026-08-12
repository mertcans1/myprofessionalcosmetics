import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductSearch from "../../components/ProductSearch";
import { productCategories } from "../../lib/products";

export const metadata: Metadata = { title: "Ürünler | M&Y Kozmetik", description: "M&Y Kozmetik profesyonel kuaför ve güzellik salonları için kozmetik ve sarf malzemeleri." };

export default function UrunlerPage() {
  return <main className="min-h-screen bg-[#090909] text-white overflow-hidden"><Navbar />
    <section className="relative pt-40 pb-24 overflow-hidden"><div className="absolute inset-0 pointer-events-none"><div className="absolute top-10 right-0 w-[650px] h-[550px] rounded-full bg-[#D4AF37]/8 blur-[170px]" /><div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" /></div><div className="relative max-w-7xl mx-auto px-6 lg:px-8"><div className="page-top" style={{ animationDelay: "0.15s" }}><span className="text-[#D4AF37] text-xs tracking-[5px] uppercase">M&Y Professional Cosmetics</span></div><h1 className="mt-5 text-5xl lg:text-7xl font-black leading-tight"><span className="page-left inline-block" style={{ animationDelay: "0.3s" }}>Profesyonel</span><br /><span className="page-left inline-block text-[#D4AF37]" style={{ animationDelay: "0.45s" }}>Ürünler</span></h1><p className="page-left mt-7 max-w-2xl text-zinc-400 text-lg leading-8" style={{ animationDelay: "0.6s" }}>Kuaför, güzellik merkezi ve profesyonel salonların günlük ihtiyaçlarına yönelik ürün gruplarını keşfedin.</p></div></section>
    <section className="pb-32"><div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="page-bottom mb-12" style={{ animationDelay: "0.7s" }}><ProductSearch /></div><div className="page-bottom mb-10" style={{ animationDelay: "0.82s" }}><span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">Ürün Kategorileri</span><h2 className="mt-4 text-3xl font-bold">Profesyonel Ürünler</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productCategories.map((category, index) => {
        const backgroundImage = category.products[0]?.image;
        return <Link key={category.slug} href={"/urunler/" + category.slug} className={"group relative min-h-[300px] rounded-[30px] border border-white/10 bg-[#101010] overflow-hidden hover:border-[#D4AF37]/45 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 " + (index % 2 === 0 ? "page-left" : "page-right")} style={{ animationDelay: (0.85 + index * 0.15) + "s" }}>
          {backgroundImage && <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center scale-[1.08] opacity-[0.16] grayscale saturate-50 blur-[0.2px] group-hover:scale-[1.02] group-hover:opacity-[0.25] transition-all duration-700" style={{ backgroundImage: `url("${backgroundImage}")` }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(212,175,55,0.13),transparent_42%),linear-gradient(180deg,rgba(9,9,9,0.12),rgba(9,9,9,0.62)_48%,rgba(9,9,9,0.97)_100%)]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
          </div>}
          <div className="relative z-10 flex h-full min-h-[300px] flex-col p-8">
            <div className="flex items-start justify-between"><span className="text-[#D4AF37] text-xs tracking-[4px]">0{index + 1}</span><span className="text-zinc-500 group-hover:text-[#D4AF37] transition-colors text-xl">↗</span></div>
            <div className="mt-auto pt-16 max-w-[88%]"><span className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-black/25 px-3 py-1 text-[10px] tracking-[3px] uppercase text-[#D4AF37]/90 backdrop-blur-sm">Kategori</span><h2 className="mt-4 text-2xl font-bold text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)]">{category.name}</h2><p className="mt-4 text-zinc-300/75 leading-7 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">{category.description}</p><div className="mt-7 text-sm text-[#D4AF37]">Ürünleri Görüntüle ↗</div></div>
          </div>
        </Link>;
      })}
      <div className="page-bottom group relative min-h-[300px] overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-[#0f0d08] hover:border-[#D4AF37]/35 hover:bg-[#12100a] transition-all duration-500" style={{ animationDelay: "1.5s" }}>
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[90px] transition-all duration-700 group-hover:scale-125 group-hover:bg-[#D4AF37]/15" />
        <div className="absolute -left-16 bottom-[-90px] h-60 w-60 rounded-full bg-[#D4AF37]/5 blur-[80px] transition-all duration-700 group-hover:scale-110" />
        <div className="relative z-10 flex h-full min-h-[300px] flex-col p-8"><span className="text-[#D4AF37] text-xs tracking-[4px] uppercase">M&Y</span><h2 className="mt-auto pt-16 text-2xl font-bold">Yeni Ürünler</h2><p className="mt-4 text-zinc-400 leading-7">Ürün yelpazemiz genişledikçe yeni kategoriler burada yer alacak.</p><Link href="/iletisim" className="inline-block mt-8 text-sm text-[#D4AF37] hover:text-white transition-colors">Bilgi Al →</Link></div>
      </div>
    </div></div></section><Footer />
  </main>;
}
