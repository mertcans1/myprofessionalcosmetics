export type Product = { slug: string; name: string; brand: string; shortDescription: string; image?: string };
export type ProductCategory = { slug: string; name: string; description: string; products: Product[] };

const item = (slug: string, name: string, brand = "M&Y Kozmetik", image?: string): Product => ({
  slug, name, brand, image,
  shortDescription: `${name}, profesyonel salonların günlük kullanım ihtiyaçları için özenle seçilmiş bir üründür.`,
});

export const productCategories: ProductCategory[] = [
  { slug: "agda", name: "Ağda", description: "Profesyonel ağda uygulamaları için kartuş, kalıp ve konserve ağda çeşitleri.", products: [
    item("kartus-agda", "Kartuş Ağda"),
    item("kalip-agda", "Kalıp Ağda"),
    item("konserve-agda", "Konserve Ağda"),
  ] },
  { slug: "agda-ekipmanlari", name: "Ağda Ekipmanları", description: "Ağda uygulamalarını tamamlayan profesyonel ekipman ve yardımcı ürünler.", products: [
    item("agda-yagi", "Ağda Yağı"),
    item("spatula", "Spatula"),
    item("agda-bezi", "Ağda Bezi"),
    item("agda-makinesi", "Ağda Makinesi"),
  ] },
  { slug: "oksidan", name: "Oksidan", description: "Kuaf Professional markalı, profesyonel saç işlemleri için oksidanlar.", products: [
    item("kuaf-professional-10-vol-5l", "10 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-10-vol.jpg"),
    item("kuaf-professional-20-vol-5l", "20 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-20-vol.jpg"),
    item("kuaf-professional-30-vol-5l", "30 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-30-vol.jpg"),
    item("kuaf-professional-40-vol-5l", "40 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-40-vol.jpg"),
  ] },
  { slug: "tek-kullanimlik", name: "Tek Kullanımlık", description: "Hijyenik salon kullanımı için tek kullanımlık ürünler.", products: [
    item("sedye-ortusu", "Sedye Örtüsü"),
    item("tek-kullanimlik-eldiven", "Tek Kullanımlık Eldiven"),
    item("tek-kullanimlik-onluk", "Tek Kullanımlık Önlük"),
  ] },
  { slug: "guzellik-urunleri", name: "Güzellik Ürünleri", description: "Manikür, pedikür ve bakım uygulamaları için profesyonel ürünler.", products: [
    item("manikur-seti", "Manikür Seti"),
    item("pedikur-seti", "Pedikür Seti"),
    item("torpu", "Törpü"),
    item("cimbiz", "Cımbız"),
    item("kas-ipi", "Kaş İpi"),
  ] },
];

export const getCategory = (slug: string) => productCategories.find((category) => category.slug === slug);
export const getProduct = (categorySlug: string, productSlug: string) => getCategory(categorySlug)?.products.find((product) => product.slug === productSlug);
