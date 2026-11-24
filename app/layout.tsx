import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julianlombard.com"),
  title: {
    default: "Julian Lombard | Data Analyst & Business Intelligence Portfolio",
    template: "%s | Julian Lombard",
  },
  description:
    "Junior Data Analyst specialising in Power BI, Excel, SQL and Python. Explore my analytics projects, dashboards and professional experience.",
  keywords: [
    "Data Analyst",
    "Junior Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "Excel",
    "Data Visualization",
    "Dashboard Development",
    "Data Analytics",
    "Data Cleaning",
    "Data Reporting",
    "Data Automation",
    "Freelance Data Analyst",
    "Remote Data Analyst",
    "Mossel Bay",
    "South Africa",
  ],
  authors: [{ name: "Julian Paul Lombard" }],
  creator: "Julian Paul Lombard",
  publisher: "Julian Paul Lombard",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julianlombard.com",
    siteName: "Julian Lombard | Data Analyst Portfolio",
    title: "Julian Lombard | Data Analyst & Business Intelligence Portfolio",
    description:
      "Junior Data Analyst specialising in Power BI, Excel, SQL and Python. Explore my analytics projects, dashboards and professional experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julian Lombard - Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Lombard | Data Analyst & Business Intelligence Portfolio",
    description:
      "Junior Data Analyst specialising in Power BI, Excel, SQL and Python. Explore my analytics projects, dashboards and professional experience.",
    images: ["/og-image.png"],
    creator: "@julianlombard",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-navy-950 text-slate-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}