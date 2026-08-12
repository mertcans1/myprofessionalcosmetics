import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCatalogPage from "../../../components/ProductCatalogPage";
import { getCategory, productCategories } from "../../../lib/products";

type Props = { params: Promise<{ category: string }> };
export function generateStaticParams() { return productCategories.map((category) => ({ category: category.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { category: slug } = await params; const category = getCategory(slug); return { title: category ? category.name + " | M&Y Kozmetik" : "ÃœrÃ¼nler | M&Y Kozmetik", description: category?.description }; }
export default async function CategoryPage({ params }: Props) { const { category: slug } = await params; const category = getCategory(slug); if (!category) notFound(); return <ProductCatalogPage category={category} />; }

