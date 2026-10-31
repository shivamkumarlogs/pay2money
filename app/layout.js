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
  title: "Pay2Money - Get Loans Online | Best Rates in India",
  description:
    "Get personal, home, business, car, gold & education loans through trusted partner banks and NBFCs. Calculate EMI and get fast loan disbursals on Pay2Money.",
  keywords:
    "loan, personal loan, home loan, business loan, gold loan, car loan, CIBIL score, loan aggregator India, Pay2Money",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <meta name="theme-color" content="#081528" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="antialiased min-h-screen text-brand-text bg-brand-surface font-sans">
        <LinksProvider>{children}</LinksProvider>
      </body>
    </html>
  );
}
