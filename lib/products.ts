export type Product = { slug: string; name: string; brand: string; shortDescription: string };
export type ProductCategory = { slug: string; name: string; description: string; products: Product[] };

const item = (slug: string, name: string, brand = "M&Y Kozmetik"): Product => ({
  slug, name, brand,
  shortDescription: `${name}, profesyonel salonlarÄ±n gÃ¼nlÃ¼k kullanÄ±m ihtiyaÃ§larÄ± iÃ§in Ã¶zenle seÃ§ilmiÅŸ bir Ã¼rÃ¼ndÃ¼r.`,
});

export const productCategories: ProductCategory[] = [
  { slug: "agda", name: "AÄŸda", description: "Profesyonel aÄŸda uygulamalarÄ± iÃ§in Ã¼rÃ¼nler ve yardÄ±mcÄ± ekipmanlar.", products: [
    item("kartus-agda", "KartuÅŸ AÄŸda"), item("kalip-agda", "KalÄ±p AÄŸda"), item("konserve-agda", "Konserve AÄŸda"), item("agda-ekipmanlari", "AÄŸda EkipmanlarÄ±"), item("agda-yagi", "AÄŸda YaÄŸÄ±"), item("spatula", "Spatula"), item("agda-bezi", "AÄŸda Bezi"), item("agda-makinesi", "AÄŸda Makinesi"),
  ] },
  { slug: "oksidan", name: "Oksidan", description: "Kuaf Professional markalÄ±, profesyonel saÃ§ iÅŸlemleri iÃ§in oksidanlar.", products: [
    item("kuaf-professional-10-vol-5l", "10 Vol 5L", "Kuaf Professional"), item("kuaf-professional-20-vol-5l", "20 Vol 5L", "Kuaf Professional"), item("kuaf-professional-30-vol-5l", "30 Vol 5L", "Kuaf Professional"), item("kuaf-professional-40-vol-5l", "40 Vol 5L", "Kuaf Professional"),
  ] },
  { slug: "tek-kullanimlik", name: "Tek KullanÄ±mlÄ±k", description: "Hijyenik salon kullanÄ±mÄ± iÃ§in tek kullanÄ±mlÄ±k Ã¼rÃ¼nler.", products: [
    item("sedye-ortusu", "Sedye Ã–rtÃ¼sÃ¼"), item("tek-kullanimlik-eldiven", "Tek KullanÄ±mlÄ±k Eldiven"), item("tek-kullanimlik-onluk", "Tek KullanÄ±mlÄ±k Ã–nlÃ¼k"),
  ] },
  { slug: "guzellik-urunleri", name: "GÃ¼zellik ÃœrÃ¼nleri", description: "ManikÃ¼r, pedikÃ¼r ve bakÄ±m uygulamalarÄ± iÃ§in profesyonel Ã¼rÃ¼nler.", products: [
    item("manikur-seti", "ManikÃ¼r Seti"), item("pedikur-seti", "PedikÃ¼r Seti"), item("torpu", "TÃ¶rpÃ¼"), item("cimbiz", "CÄ±mbÄ±z"), item("kas-ipi", "KaÅŸ Ä°pi"),
  ] },
];

export const getCategory = (slug: string) => productCategories.find((category) => category.slug === slug);
export const getProduct = (categorySlug: string, productSlug: string) => getCategory(categorySlug)?.products.find((product) => product.slug === productSlug);

