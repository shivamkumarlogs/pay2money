import localFont from "next/font/local";
import "./globals.css";
import { LinksProvider } from "./context/LinksContext";

// ============================================================================
// SELF-HOSTED ENTERPRISE FONT (next/font/local)
// Zero layout shifts (CLS = 0), zero external network calls, 100% offline-ready
// ============================================================================
const manrope = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  variable: "--font-primary",
  display: "swap",
  weight: "200 800",
});

export const metadata = {
  metadataBase: new URL("https://www.pay2money.com"),
  title: "Pay2Money - Get Loans Online | Best Rates in India",
  description:
    "Get personal, home, business, car, gold & education loans through trusted partner banks and NBFCs. Calculate EMI and get fast loan disbursals on Pay2Money.",
  keywords:
    "loan, personal loan, home loan, business loan, gold loan, car loan, CIBIL score, loan aggregator India, Pay2Money",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Pay2Money - Get Loans Online | Best Rates in India",
    description:
      "Get personal, home, business, car, gold & education loans from 40+ banks and NBFCs. Apply online for free on Pay2Money.",
    url: "https://www.pay2money.com",
    siteName: "Pay2Money",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay2Money - Get Loans Online | Best Rates in India",
    description:
      "Get personal, home, business, car, gold & education loans from 40+ banks and NBFCs. Apply online for free on Pay2Money.",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.pay2money.com/#organization",
  name: "Pay2Money",
  legalName: "PM Finance Services Pvt Ltd",
  url: "https://www.pay2money.com",
  logo: "https://www.pay2money.com/icon-512.png",
  image: "https://www.pay2money.com/opengraph-image.jpg",
  description:
    "Online loan facilitation platform connecting borrowers across India with scheduled commercial banks and RBI-registered NBFCs for personal, business, home, and gold loans.",
  telephone: "+91 7239037839",
  email: "info@pay2money.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 3049, First Floor, Block E-II, Faridabad Bypass Road, Molar Band Extension",
    addressLocality: "New Delhi",
    postalCode: "110044",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:30",
    closes: "18:30",
  },
  priceRange: "Free",
  founder: {
    "@type": "Person",
    name: "Deepak Kumar",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <meta name="theme-color" content="#081528" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(financialServiceSchema),
          }}
        />
      </head>
      <body className="antialiased min-h-screen text-brand-text bg-brand-surface font-sans">
        <LinksProvider>{children}</LinksProvider>
      </body>
    </html>
  );
}
