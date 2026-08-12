import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "../../../../components/ProductDetailPage";
import { getCategory, getProduct, productCategories } from "../../../../lib/products";

type Props = { params: Promise<{ category: string; product: string }> };
export function generateStaticParams() { return productCategories.flatMap((category) => category.products.map((product) => ({ category: category.slug, product: product.slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { category: categorySlug, product: productSlug } = await params; const product = getProduct(categorySlug, productSlug); return { title: product ? product.name + " | M&Y Kozmetik" : "Ürünler | M&Y Kozmetik", description: product?.shortDescription }; }
export default async function ProductPage({ params }: Props) { const { category: categorySlug, product: productSlug } = await params; const category = getCategory(categorySlug); const product = getProduct(categorySlug, productSlug); if (!category || !product) notFound(); return <ProductDetailPage category={category} product={product} />; }

