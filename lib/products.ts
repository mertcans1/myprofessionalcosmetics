export type Product = { slug: string; name: string; brand: string; shortDescription: string; image?: string };
export type ProductCategory = { slug: string; name: string; description: string; products: Product[] };

const item = (slug: string, name: string, brand = "M&Y Kozmetik", image?: string): Product => ({
  slug, name, brand, image,
  shortDescription: `${name}, profesyonel salonların günlük kullanım ihtiyaçları için özenle seçilmiş bir üründür.`,
});

export const productCategories: ProductCategory[] = [
  { slug: "agda", name: "Ağda", description: "Profesyonel ağda uygulamaları için kartuş, kalıp ve konserve ağda çeşitleri.", products: [
    item("kartus-agda", "Kartuş Ağda", "M&Y Kozmetik", "/products/my-kartus-agda-azulen.png"),
    item("kalip-agda", "Kalıp Ağda", "M&Y Kozmetik", "/products/my-kalip-agda-azulen.png"),
    item("konserve-agda", "Konserve Ağda", "M&Y Kozmetik", "/products/my-konserve-agda-azulen.png"),
  ] },
  { slug: "agda-ekipmanlari", name: "Ağda Ekipmanları", description: "Ağda uygulamalarını tamamlayan profesyonel ekipman ve yardımcı ürünler.", products: [
    item("agda-yagi", "Ağda Yağı", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oil_bottle_clip_art.png"),
    item("spatula", "Spatula", "Genel", "/products/spatula.jpg"),
    item("agda-bezi", "Ağda Bezi", "Genel", "/products/agda-bezi.webp"),
    item("agda-makinesi", "Ağda Makinesi", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Waxing_Studio_-_panoramio.jpg"),
  ] },
  { slug: "oksidan", name: "Oksidan", description: "Kuaf Professional markalı, profesyonel saç işlemleri için oksidanlar.", products: [
    item("kuaf-professional-10-vol-5l", "10 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-10-vol.jpg"),
    item("kuaf-professional-20-vol-5l", "20 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-20-vol.jpg"),
    item("kuaf-professional-30-vol-5l", "30 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-30-vol.jpg"),
    item("kuaf-professional-40-vol-5l", "40 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-40-vol.jpg"),
  ] },
  { slug: "tek-kullanimlik", name: "Tek Kullanımlık", description: "Hijyenik salon kullanımı için tek kullanımlık ürünler.", products: [
    item("sedye-ortusu", "Sedye Örtüsü", "Genel", "https://c.shld.net/rpx/i/s/pi/mp/9150/prod_11143874902?d=d2d9be9ff9b7a39f1de5ebf666fd57a387e3b082&hei=1000&src=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F31swx9mNI5L.jpg&wid=1000"),
    item("tek-kullanimlik-eldiven", "Tek Kullanımlık Eldiven", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Disposable_gloves_05.JPG"),
    item("tek-kullanimlik-onluk", "Tek Kullanımlık Önlük", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apron_MET_1991.385.1.jpg"),
  ] },
  { slug: "guzellik-urunleri", name: "Güzellik Ürünleri", description: "Manikür, pedikür ve bakım uygulamaları için profesyonel ürünler.", products: [
    item("manikur-seti", "Manikür Seti", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Set%2C_manicure_%2851360554084%29.jpg"),
    item("pedikur-seti", "Pedikür Seti", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pedicure_1.jpg"),
    item("torpu", "Törpü", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glass_nail_file.jpg"),
    item("cimbiz", "Cımbız", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Two_tweezers.png"),
    item("kas-ipi", "Kaş İpi", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Eyebrow_threading.jpg"),
  ] },
];

export const getCategory = (slug: string) => productCategories.find((category) => category.slug === slug);
export const getProduct = (categorySlug: string, productSlug: string) => getCategory(categorySlug)?.products.find((product) => product.slug === productSlug);
