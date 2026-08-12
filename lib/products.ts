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
    item("agda-yagi", "Ağda Yağı", "Genel", "/products/replacements/agda-yagi.webp"),
    item("spatula", "Spatula", "Genel", "/products/spatula.jpg"),
    item("agda-bezi", "Ağda Bezi", "Genel", "/products/agda-bezi.webp"),
    item("agda-makinesi", "Ağda Makinesi", "Genel", "https://africaproducts.nl/cdn/shop/products/7222.jpg?v=1613226081"),
  ] },
  { slug: "oksidan", name: "Oksidan", description: "Kuaf Professional markalı, profesyonel saç işlemleri için oksidanlar.", products: [
    item("kuaf-professional-10-vol-5l", "10 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-10-vol.jpg"),
    item("kuaf-professional-20-vol-5l", "20 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-20-vol.jpg"),
    item("kuaf-professional-30-vol-5l", "30 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-30-vol.jpg"),
    item("kuaf-professional-40-vol-5l", "40 Vol 5L", "Kuaf Professional", "/products/kuaf-oksidan-40-vol.jpg"),
  ] },
  { slug: "tek-kullanimlik", name: "Tek Kullanımlık", description: "Hijyenik salon kullanımı için tek kullanımlık ürünler.", products: [
    item("sedye-ortusu", "Sedye Örtüsü", "Genel", "https://c.shld.net/rpx/i/s/pi/mp/9150/prod_11143874902?d=d2d9be9ff9b7a39f1de5ebf666fd57a387e3b082&hei=1000&src=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F31swx9mNI5L.jpg&wid=1000"),
    item("tek-kullanimlik-eldiven", "Tek Kullanımlık Eldiven", "Genel", "https://s.alicdn.com/@sc04/kf/Hee3b394b1f474be189f3816707537b97i/Blue-Vinyl-Glovee-Wholesale-CE-Approval-Popular-in-Beauty-Salon-Disposable-PVC-Glovee-Powder-Free.jpg"),
    item("tek-kullanimlik-onluk", "Tek Kullanımlık Önlük", "Genel", "/products/replacements/tek-kullanimlik-onluk.jpg"),
  ] },
  { slug: "guzellik-urunleri", name: "Güzellik Ürünleri", description: "Manikür, pedikür ve bakım uygulamaları için profesyonel ürünler.", products: [
    item("manikur-seti", "Manikür Seti", "Genel", "/products/replacements/manikur-seti.jpeg"),
    item("pedikur-seti", "Pedikür Seti", "Genel", "/products/replacements/pedikur-seti.webp"),
    item("torpu", "Törpü", "Genel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glass_nail_file.jpg"),
    item("cimbiz", "Cımbız", "Genel", "/products/replacements/cimbiz.webp"),
    item("kas-ipi", "Kaş İpi", "Genel", "https://live.staticflickr.com/2074/1502808309_d5070fdc2a_o.jpg"),
  ] },
];

export const getCategory = (slug: string) => productCategories.find((category) => category.slug === slug);
export const getProduct = (categorySlug: string, productSlug: string) => getCategory(categorySlug)?.products.find((product) => product.slug === productSlug);
