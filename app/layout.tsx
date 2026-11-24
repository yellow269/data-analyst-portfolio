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
    default: "Julian Lombard | Data Analyst & BI Specialist",
    template: "%s | Julian Lombard",
  },
  description:
    "Data Analyst specializing in Power BI, SQL, Python, and Excel. Transforming raw data into actionable insights through dashboards, analytics, and business intelligence solutions.",
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "Excel",
    "Data Visualization",
    "Dashboard Development",
    "Data Analytics",
    "Freelance Data Analyst",
  ],
  authors: [{ name: "Julian Lombard" }],
  creator: "Julian Lombard",
  publisher: "Julian Lombard",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julianlombard.com",
    siteName: "Julian Lombard | Data Analyst",
    title: "Julian Lombard | Data Analyst & BI Specialist",
    description:
      "Data Analyst specializing in Power BI, SQL, Python, and Excel. Transforming raw data into actionable insights.",
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
    title: "Julian Lombard | Data Analyst & BI Specialist",
    description:
      "Data Analyst specializing in Power BI, SQL, Python, and Excel. Transforming raw data into actionable insights.",
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