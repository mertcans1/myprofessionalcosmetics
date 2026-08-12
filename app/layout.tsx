import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "M&Y Kozmetik | Profesyonel Kozmetik ve Kuaför Ürünleri",
    template: "%s | M&Y Kozmetik",
  },

  description:
    "M&Y Kozmetik; kuaför, güzellik merkezi ve profesyonel salonlara ağda, kozmetik, kuaför sarf malzemeleri ve salon ekipmanları tedarik eder.",

  keywords: [
    "M&Y Kozmetik",
    "M&Y Professional Cosmetics",
    "kozmetik",
    "kuaför ürünleri",
    "kuaför sarf malzemeleri",
    "ağda",
    "profesyonel ağda",
    "salon ürünleri",
    "güzellik merkezi ürünleri",
    "Ankara kozmetik",
    "Ankara kuaför malzemeleri",
  ],

  authors: [
    {
      name: "M&Y Kozmetik",
    },
  ],

  creator: "M&Y Kozmetik",

  metadataBase: new URL(
    "https://myprofessionalcosmetics.com"
  ),

  openGraph: {
    title:
      "M&Y Kozmetik | Profesyonel Kozmetik ve Kuaför Ürünleri",

    description:
      "Kuaför ve güzellik profesyonelleri için kozmetik ve salon ürünleri.",

    url: "https://myprofessionalcosmetics.com",

    siteName: "M&Y Kozmetik",

    locale: "tr_TR",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}