import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fábrica Abstracta - Desarrollo de Software y Tecnología",
  description: "Fábrica Abstracta es una empresa de desarrollo de software, aplicaciones web y soluciones tecnológicas innovadoras. Especialistas en desarrollo full-stack y consultoría tecnológica.",
  keywords: "desarrollo software, aplicaciones web, tecnología, programación, desarrollo full-stack, consultoría tecnológica, fábrica abstracta",
  authors: [{ name: "Fábrica Abstracta" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://fabrica-abstracta.com/",
    title: "Fábrica Abstracta - Desarrollo de Software y Tecnología",
    description: "Empresa de desarrollo de software, aplicaciones web y soluciones tecnológicas innovadoras.",
    images: [
      {
        url: "https://fabrica-abstracta.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Fábrica Abstracta Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fábrica Abstracta - Desarrollo de Software y Tecnología",
    description: "Empresa de desarrollo de software, aplicaciones web y soluciones tecnológicas innovadoras.",
    images: ["https://fabrica-abstracta.com/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fábrica Abstracta",
              "url": "https://fabrica-abstracta.com",
              "logo": "https://fabrica-abstracta.com/logo.png",
              "description": "Empresa de desarrollo de software, aplicaciones web y soluciones tecnológicas innovadoras",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Miguel Ángel Fernández",
                "jobTitle": "CEO y Fundador",
                "description": "Visionario tecnológico especializado en desarrollo de software, inteligencia artificial y transformación digital empresarial"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Miguel Ángel Fernández",
                  "jobTitle": "CEO y Fundador"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://fabrica-abstracta.com/contact-us"
              },
              "sameAs": [
                "https://github.com/fabrica-abstracta"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES"
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desarrollo de Software",
                  "description": "Servicios de desarrollo de aplicaciones web, software personalizado y consultoría tecnológica"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased font-sans`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
